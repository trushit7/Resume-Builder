import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../resources/authentication.css";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="auth-parent">
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item label={"username"} name={"username"}>
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item label={"password"} name={"password"}>
          <Input />
        </Form.Item>
        <Form.Item label={"confirm password"} name={"cpassword"}>
          <Input />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to={"/login"}>Click here to Login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
