import React, { useState, useEffect } from "react";
import { Spin, Form, Input, Button, Checkbox, message } from "antd";
import "../resources/authentication.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigation = useNavigate();

  const [loading, setLoading] = useState(false);

  const onFinish = async (value) => {
    setLoading(true);
    try {
      await axios.post("/api/user/register", value);

      message.success("registraction success");
      navigation("/");
      setLoading(false);
    } catch (error) {
      message.error("something went wrong");
      setLoading(false);
    }
  };

  if (localStorage.getItem("user")) {
    return <Navigate to={"/home"} />;
  }

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item label={"username"} name={"username"}>
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item label={"password"} name={"password"}>
          <Input type={"password"} />
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
