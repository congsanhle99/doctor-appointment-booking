import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const onFinish = (values) => {
    console.log("value", values);
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button className="primary-button my-2" htmlType="submit">
            LOGIN
          </Button>
          <Link to="/register" className="anchor">
            CLICK HERE TO REGISTER
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
