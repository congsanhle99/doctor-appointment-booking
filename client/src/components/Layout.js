import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-file-user-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-r-line",
    },
  ];

  const menuToBeRendered = userMenu;

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">{!collapsed && <h1>lcsanh</h1>}</div>
          <div className={collapsed ? "menu-collapsed" : "menu"}>
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div className={`d-flex menu-item ${isActive && "active-menu-item "}`} key={menu.name}>
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">
            {collapsed ? (
              <i class="ri-menu-line action-icon" onClick={() => setCollapsed(!collapsed)}></i>
            ) : (
              <i className="ri-close-line action-icon" onClick={() => setCollapsed(!collapsed)}></i>
            )}
            <div className="d-flex align-items-center px-4">
              <i className="ri-notification-line action-icon px-2"></i>
              <Link to="/profile" className="anchor">
                {user?.name}
              </Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
