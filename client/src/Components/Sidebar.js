import React, { useState, useContext } from "react";
import "./Styles/sidebar.css";
import axios from "axios";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import { AuthLoginInfo } from "./../AuthComponents/AuthLogin";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const logout = () => {
  axios
    .get("http://localhost:5000/logout", {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data === "success") {
        window.location.href = "/login";
      }
    });
};


const SidebarSection = ({ ctx, sidebarCollapse }) => {
  return (
    <div
      className={`Sidebar ${sidebarCollapse ? "SidebarOpen" : "SidebarClosed"}`}
    >
      <div className="SidebarLogoWrap">
        <div className="SidebarLogo">
          <h1>Nalaiyathiran</h1>
        </div>
      </div>

      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          if (val?.role !== undefined && val?.role !== ctx?.role) {
            return null;
          }
          return (
            <NavLink
              to={val.link}
              key={key}
              className={({ isActive }) =>
                isActive ? "sidebar-active-link" : "sidebar-link"
              }
            >
              <li className="SidebarRow">
                <div className="RowIcon">{val.icon}</div>
                <div className="RowTitle">{val.title}</div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

function Sidebar() {
  const ctx = useContext(AuthLoginInfo); 

  return (
    <div className="SidebarWrapper">
      <SidebarSection ctx={ctx} />
    </div>
  );
}

export default Sidebar;
