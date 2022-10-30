import { Dropdown, Button, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../resources/layout.css";

const Layout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

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
                navigate("/login");
              }}
            >
              Logout
            </div>
          ),
        },
      ]}
    />
  );

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
