import React, { useContext } from "react";
import "./Styles/sidebar.css";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { SidebarData } from "./SidebarData";
import {SidebarHODData} from "./SidebarHODData";
import { AuthLoginInfo } from "./../AuthComponents/AuthLogin";

const SidebarSection = ({ ctx, sidebarCollapse, userId }) => {
    console.log(userId.userId,"sec",)
  return (
    <div className={`Sidebar ${sidebarCollapse ? "SidebarOpen" : "SidebarClosed"}`}>
      <div className="SidebarLogoWrap">
        <div className="SidebarLogo">
          <h1>Nalaiyathiran</h1>
        </div>
      </div>
    { userId.userId.userId === "fCUUjbdovFZnFjea0H26oZeHSHA3" ?
      <ul className="SidebarList">
        {SidebarHODData.map((val, key) => {
          if (val?.role !== undefined && val?.role !== ctx?.role) {
            return null;
          }

          const link = val.link.replace(":userId", userId.userId.userId);

          return (
            <NavLink
              to={link}
              key={key}
              className={({ isActive }) => (isActive ? "sidebar-active-link" : "sidebar-link")}
            >
              <li className="SidebarRow">
                <div className="RowIcon">{val.icon}</div>
                <div className="RowTitle">{val.title}</div>
              </li>
            </NavLink>
          );
        })}
      </ul>
      : 
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          if (val?.role !== undefined && val?.role !== ctx?.role) {
            return null;
          }

          const link = val.link.replace(":userId", userId.userId.userId);

          return (
            <NavLink
              to={link}
              key={key}
              className={({ isActive }) => (isActive ? "sidebar-active-link" : "sidebar-link")}
            >
              <li className="SidebarRow">
                <div className="RowIcon">{val.icon}</div>
                <div className="RowTitle">{val.title}</div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    }
    </div>
  );
};

function Sidebar( userId ) {
  const ctx = useContext(AuthLoginInfo);
  console.log(userId,"sidebar!");

  return (
    <div className="SidebarWrapper">
      <SidebarSection ctx={ctx} userId={userId} />
    </div>
  );
}

export default Sidebar;
