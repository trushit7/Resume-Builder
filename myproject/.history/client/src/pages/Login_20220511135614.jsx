import React, { useState } from "react";
import { Spin, Form, Input, Button, Checkbox, message } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (value) => {
    setLoading(true);
    try {
      const user = await axios.post("/api/user/login", value);

      message.success("login success");
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(user.data));

      navigate("/home");
    } catch (error) {
      message.error("something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}

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
