import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Template1 from "./Template1";

const Templates = () => {
  const params = useParams();

  const getTemplate = () => {
    switch (params.id) {
      case "1":
        return <Template1 />;
        break;
    }
  };

  return <Layout>{getTemplate()}</Layout>;
};

export default Templates;
