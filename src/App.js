import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Compose from "./Compose";
import Emaildetail from "./Emaildetail";
import Emailist from "./Emailist";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import { signin, signout } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signin({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      } else {
        dispatch(signout());
      }
    });
  }, []);
  return (
    <Router>
      {user && (
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
      )}{" "}
      : {<Login />}
    </Router>
  );
}

export default App;
