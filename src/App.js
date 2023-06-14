import './App.css';

import { useFastboard, Fastboard } from "@netless/fastboard-react";
import React, { useEffect, useState } from "react";

function App() {

  // const [token, setToken] = useState([]);

  // useEffect(() => {
  //   fetch('https://dspmd68lf6.execute-api.ap-south-1.amazonaws.com/roomToken')
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log("res==", res);
  //       setToken(res);
  //     })
  // }, [])

  const fastboard = useFastboard(() => ({
    sdkConfig: {
      appIdentifier: "lFsVUHd8EeyRoMGwMgqdqg/UP5q_u4F4Hjx-w",
      region: "us-sv", // "cn-hz" | "us-sv" | "sg" | "in-mum" | "gb-lon"
    },
    joinRoom: {
      uid: "112",
      uuid: "447eb0c00a7c11eea4399deea8dac2db",
      roomToken: "NETLESSROOM_YWs9VTJEVHVOYUFadGNRaU01SiZleHBpcmVBdD0xNjg2NzI3NTM1MTE1Jm5vbmNlPTE2ODY3MjM5MzUxMTUwMCZyb2xlPTAmc2lnPTJiNTg0YzhlZjIwYTBkMDhhODc5ZTc4MDg3NzcyZDg0NjVkMzY1ZWQxZDc4NDYyZGI0ODk2NWE0MzkzZWUwMDcmdXVpZD00NDdlYjBjMDBhN2MxMWVlYTQzOTlkZWVhOGRhYzJkYg",
    },
  }));

  const FastboardUIConfig = { toolbar: { apps: { enable: false } } }
  // Container must have a visible size
  return (
    <div style={{
      height: "400px",
      border: "1px solid",
      background: "#f1f2f3",
    }}>
      <Fastboard app={fastboard} config={FastboardUIConfig} />
    </div>
  );
}

export default App;
