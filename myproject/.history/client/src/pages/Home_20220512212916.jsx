import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  const templates = [
    {
      title: "Simple Template",
      image: "/template.png",
    },
  ];

  return (
    <Layout>
      <h1>This is Home Page</h1>
    </Layout>
  );
};

export default Home;
