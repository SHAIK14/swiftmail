import { Routes, Route } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Compose from "./Compose";
import Emaildetail from "./Emaildetail";
import Emailist from "./Emailist";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Emailist />} />
            <Route path="/mail" element={<Emaildetail />} />
          </Routes>
        </div>
        {isMessageOpen && <Compose />}
      </div>
    </Router>
  );
}

export default App;
