import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const Register = () => {
  return (
    <div className="register">
      <Form>
        <Form.Item label={"username"} name={"username"}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
