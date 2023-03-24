import React from "react";
import Compose from "./Compose";
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
      <Compose />
    </div>
  );
}

export default App;
