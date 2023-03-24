import React from "react";
import Emailist from "./Emailist";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Emailist />
      </div>
    </div>
  );
}

export default App;
