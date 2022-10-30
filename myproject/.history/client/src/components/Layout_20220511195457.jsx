import { Dropdown, Button, Menu } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";
import "../resources/layout.css";

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/home">
            Home
          </a>
        ),
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="/profile">
            Profile
          </a>
        ),
      },
      {
        label: (
          <div
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              localStorage.removeItem("user");
              Navigate("/login");
            }}
          >
            Logout
          </div>
        ),
      },
    ]}
  />
);

const Layout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="layout">
      <div className="header">
        <h1>Resume Builder</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
