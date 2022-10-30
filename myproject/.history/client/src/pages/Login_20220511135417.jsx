import React from "react";
import { Spin, Form, Input, Button, Checkbox, message } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (value) => {
    try {
      const user = await axios.post("/api/user/login", value);

      message.success("login success");

      localStorage.setItem("user", JSON.stringify(user.data));

      navigate("/home");
    } catch (error) {
      message.error("something went wrong");
    }
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
          <Input type={"password"} />
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
