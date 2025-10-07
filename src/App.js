import React, { useState } from "react";
import DesktopNestedDrawer from "./components/DesktopNestedDrawer";

function App() {

  const [isExpanded, setIsExpanded] = useState(false);

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
      {/* <DesktopNestedDrawer width={520} /> */}
      <div style = {{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItmes: 'center', height: '100vh' }}>
        <div 
          style={{
            width: '200px',
            height: isExpanded ? '400px' : '200px',
            backgroundColor: 'red',
            transition: 'height 0.3s ease-in-out' 
          }}
        >

        </div>
      </div>
      <button onClick={() => {
        setIsExpanded(!isExpanded)
      }}>Click me</button>

    </div>
  );
}

export default App;
