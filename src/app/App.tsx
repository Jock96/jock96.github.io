import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { FC } from "react";
import { getInstance } from "voximplant-websdk";

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
          H264first: true
        };
        // pass these settings to the call() method
        const call = sdk.callConference(callSettings);
        call.sendVideo(true);
        sdk.showLocalVideo(true);
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
