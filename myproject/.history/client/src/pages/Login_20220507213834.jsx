import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../resources/authentication.css";
import { Link } from "react-router-dom";

const Login = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="auth-parent">
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item label={"username"} name={"username"}>
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item label={"password"} name={"password"}>
          <Input />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to={"/register"}>Click here to Register</Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
