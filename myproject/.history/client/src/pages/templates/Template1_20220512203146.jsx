import React from "react";
import "./../../resources/template.css";

const Template1 = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="template-parent-1">
      <div className="top d-flex justify-content-between">
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Template1;
