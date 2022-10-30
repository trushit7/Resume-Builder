import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { useReactToPrint } from "react-to-print";
import { Button } from "antd";

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
      <div className="d-flex justify-content-end my-5 mx-5">
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          Back
        </Button>
        <Button className="mx-5" onClick={handlePrint}>
          Print
        </Button>
      </div>
      <div ref={componentRef}>{getTemplate()}</div>
    </Layout>
  );
};

export default Templates;
