import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const Register = () => {
  return (
    <div className="register">
      <Form layout="vertical">
        <Form.Item label={"username"} name={"username"}>
          <Input placeholder="username" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
