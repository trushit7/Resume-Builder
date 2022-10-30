import { Dropdown, Button, Menu } from "antd";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../resources/layout.css";

const Layout = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link rel="noopener noreferrer" to="/home">
              Home
            </Link>
          ),
        },
        {
          label: (
            <Link rel="noopener noreferrer" to="/profile">
              Profile
            </Link>
          ),
        },
        {
          label: (
            <div
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
        <h1
          onClick={() => navigate("/home")}
          style={{
            cursor: "pointer",
          }}
        >
          Resume Builder
        </h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>{user.username}</Button>
        </Dropdown>
      </div>
      <div
        className="content"
        style={{
          overflow: "scroll",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
