import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Template1 from "./Template1";
import Template2 from "./Template2";

const Templates = () => {
  const params = useParams();

  const getTemplate = () => {
    switch (params.id) {
      case "1":
        return <Template1 />;
      case "2":
        return <Template2 />;
    }
  };

  return <Layout>{getTemplate()}</Layout>;
};

export default Templates;
