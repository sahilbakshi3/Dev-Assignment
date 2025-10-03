import React from "react";
import DesktopNestedDrawer from "./components/DesktopNestedDrawer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",     
        height: "100vh",          
        textAlign: "center"
      }}
    >
      <DesktopNestedDrawer width={520} />
    </div>
  );
}

export default App;
