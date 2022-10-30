import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../resources/template.css";

const Home = () => {
  const templates = [
    {
      title: "Simple Template",
      image: "/template.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="row home">
        {templates.map((temp, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img src={temp.image} height="400" width="400" alt="" />
                <div className="text">
                  <p>{temp.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
