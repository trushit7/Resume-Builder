import React from "react";
import "./../../resources/template.css";

const Template1 = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="template-parent-1">
      <div className="top d-flex justify-content-between">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>

      <div className="divider mt-5"></div>

      <div className="objective mt-5">
        <h3>Objective</h3>
        <hr />
        <p>{user.objective}</p>
      </div>

      <div className="divider mt-5"></div>

      <div className="education mt-5">
        <h3>Education</h3>
        <hr />
        {user.education.map((ed) => (
          <div className="d-flex align-items-center">
            <h6
              style={{
                width: 120,
              }}
            >
              <b>{ed.range} : </b>
            </h6>
            <p>
              <b> {ed.qualification} </b>with <b>{ed.percentage} %</b> in{" "}
              {ed.institution}
            </p>
          </div>
        ))}
      </div>

      <div className="divider mt-5"></div>

      <div className="experience mt-5">
        <h3>Experience </h3>
        <hr />
        {user.education.map((ed) => (
          <div className="d-flex align-items-center">
            <h6
              style={{
                width: 120,
              }}
            >
              <b>{ed.range} : </b>
            </h6>
            <p>
              <b> {ed.qualification} </b>with <b>{ed.percentage} %</b> in{" "}
              {ed.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template1;
