import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { useReactToPrint } from "react-to-print";

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

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Layout>
      <div>{getTemplate()}</div>
    </Layout>
  );
};

export default Templates;
