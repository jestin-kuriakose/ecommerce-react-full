import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/apiCalls";

export default function Topbar() {

  const user = useSelector((state) => state.user)

  const cUser = user.currentUser

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img width="140px" className="logo" src="https://teslaelectronics.ca/wp-content/uploads/2022/01/Logo-B-PNG-Transparent.png"></img>
        </div>
        <div className="topRight">
          {cUser && <button onClick={handleLogout}>Logout</button> }
          {!cUser && <button>Sign in</button>}
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
