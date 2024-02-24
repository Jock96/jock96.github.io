import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { FC } from "react";
import { getInstance, CallEvents, EndpointEvents } from "voximplant-websdk";

const sdk = getInstance();

const login = async () => {
  try {
    await sdk.init({
      localVideoContainerId: "localvideo",
      remoteVideoContainerId: "remotevideo",
    });
    console.log("SDK is ready!");
    try {
      await sdk.connect();
      console.log("Connected");
    } catch (e) {
      console.log("Connection failed!");
    }
  } catch (e) {
    console.log("SDK init failure!");
  }
};

const startcall = (isJoin?: boolean) => {
  login().then(() => {
    sdk
      .login(
        `test${isJoin ? "1" : ""}@test.jock96.n8.voximplant.com`,
        "1772018p"
      )
      .then(() => {
        console.log("Logged in!");
        // prepare settings
        const callSettings = {
          number: "myConf",
          simulcast: true,
          video: {
            sendVideo: true,
            receiveVideo: true,
          },
          H264first: true,
        };
        // pass these settings to the call() method
        const call = sdk.callConference(callSettings);
        call.sendVideo(true);
        sdk.showLocalVideo(true);

        call.addEventListener(CallEvents.Connected, (e) => {
          sdk.showLocalVideo(true);

          // alternatively to this, you can use the endpoint to render local video manually
          // uncomment this to use the endpoint
          e.call.on(CallEvents.EndpointAdded, (e) => {
              const container = document.createElement('div')
              container.id = e.endpoint.id
              document.getElementById("remotevideo")?.appendChild(container)
          
              // subscribe to the remote media added event
              e.endpoint.on(EndpointEvents.RemoteMediaAdded, (e) => {
                  const container = document.getElementById(e.endpoint.id);
                  e.mediaRenderer.render(container);
              });
              e.endpoint.on(EndpointEvents.RemoteMediaRemoved, (e) => {});
              e.endpoint.on(EndpointEvents.RemoteMediaUpdated, (e) => {
                  // this event is triggered when user replaces video with screen sharing and vice versa
              });
          });
          e.call.on(CallEvents.EndpointRemoved, (e) => {});
        });
      })
      .catch(() => {
        console.log("Login failure!");
      });
  });
};

const join = () => {
  startcall(true);
};

export const App: FC = () => {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <div id="remotevideo" />
      <div id="localvideo" />
      <button onClick={join}>join</button>
      <button onClick={() => startcall()}>call</button>
      {/* <button onClick={}></button> */}
    </div>
  );
};
