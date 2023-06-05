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
      uid: "11222",
      uuid: "2916a270036a11eeb7c1615b55e934d3",
      roomToken: "NETLESSROOM_YWs9VTJEVHVOYUFadGNRaU01SiZleHBpcmVBdD0xNjg1OTUwMDk5NzI5Jm5vbmNlPTE2ODU5NDY0OTk3MjkwMCZyb2xlPTAmc2lnPTA4OGU2YjY5ZmExYjYxYTcwZDMyMmExYThjMDU0MGNmODc0MzBhYmE4M2FhY2FkODA3MTAzOTA4NGNmOTU4Y2YmdXVpZD0yOTE2YTI3MDAzNmExMWVlYjdjMTYxNWI1NWU5MzRkMw",
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
