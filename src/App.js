import React from "react";
import DesktopNestedDrawer from "./components/DesktopNestedDrawer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical centering
        alignItems: "center",     // horizontal centering
        height: "100vh",          // full viewport height
        textAlign: "center"
      }}
    >
      <DesktopNestedDrawer width={520} />
    </div>
  );
}

export default App;
