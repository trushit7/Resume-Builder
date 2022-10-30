import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const Register = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="register">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label={"username"} name={"username"}>
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item label={"password"} name={"password"}>
          <Input />
        </Form.Item>
        <Form.Item label={"confirm password"} name={"cpassword"}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
