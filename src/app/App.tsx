import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { FC } from "react";
import { getInstance } from "voximplant-websdk";

const sdk = getInstance();

let isJoin = false

const login = async () => {
  try {
    await sdk.init({
      localVideoContainerId: "localvideo",
      remoteVideoContainerId: "remotevideo",
    });
    console.log("SDK is ready!");
    sdk.showLocalVideo(true);
    try {
      await sdk.connect();
      console.log("Connected");
    } catch (e) {
      console.log("Connection failed!");
    }
    try {
      await sdk.login(`test${isJoin ? "1" : ""}@test.jock96.n8.voximplant.com`, "1772018p");
      console.log("Logged in!");
    } catch (e: any) {
      console.log("Login failure!");
      console.log("Er:", e);
    }
  } catch (e) {
    console.log("SDK init failure!");
  }
};

const startcall = () => {
  login();
  // prepare settings
  const callSettings = {
    number: "myConf",
    simulcast: true,
    video: {
      sendVideo: true,
      receiveVideo: true,
    },
  };
  // pass these settings to the call() method
  const call = sdk.callConference(callSettings);
};

const join = () => {
  isJoin = true
  startcall()
}

export const App: FC = () => {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <div id="remotevideo"></div>
      <div id="localvideo"></div>
      <button onClick={join}>join</button>
      <button onClick={startcall}>call</button>
    </div>
  );
};
