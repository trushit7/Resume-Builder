import React from "react";
import Layout from "../components/Layout";
import "../resources/template.css";

const Home = () => {
  const templates = [
    {
      title: "Simple Template",
      image: "/template.png",
    },
  ];

  return (
    <Layout>
      <div className="row home">
        {templates.map((temp) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img src={temp.image} height="400" width="400" alt="" />
                <p>{temp.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
