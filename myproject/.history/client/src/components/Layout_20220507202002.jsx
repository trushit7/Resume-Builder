import React from "react";
import "../resources/layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="header">
        <h1>Resume Builder</h1>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
