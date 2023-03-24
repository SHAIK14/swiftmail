import React from "react";
import "./css/emaillist.css";
import Emailbody from "./Emailbody";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";

const Emailist = () => {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />
      <Emailbody
        name="Asif shaik"
        subject="subject"
        message="clone app"
        time="3:30 PM"
      />
    </div>
  );
};

export default Emailist;
