import React from "react";
import "./css/emaillist.css";
import { IconButton, Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PrintIcon from "@mui/icons-material/Print";
import LaunchIcon from "@mui/icons-material/Launch";

import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMail } from "./features/mailSlice";

function Emaildetail() {
  const mail = useSelector(selectedMail);
  const history = useNavigate();
  return (
    <div className="emaildetails">
      <div className="emailist__settings">
        <div className="emailist__settingsLeft">
          <IconButton>
            <ArrowBackIcon onClick={() => history("/")} />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailist__settingsRight">
          <p>1-50 of 5000</p>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaildetails_message">
        <div className="emaildetails__header">
          <div className="emaildetails__headerLeft">
            <h4>{mail.subject}</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>

          <div className="emaildetails__headerRight">
            <IconButton>
              <PrintIcon />
            </IconButton>

            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>

        <div className="emaildetails__middleheader">
          <div className="emaildetails__middleheaderLeft">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.subject}</h4>
            <p>{mail.name}</p>
          </div>

          <div className="emaildetails__middleheaderRight">
            <p>{mail.time}</p>
            <IconButton>
              <StarIcon />
            </IconButton>

            <IconButton>
              <ReplyIcon />
            </IconButton>

            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails_body">
          <p>{mail.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Emaildetail;