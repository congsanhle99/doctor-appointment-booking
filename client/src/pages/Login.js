import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsSlice";
const Login = () => {
  const dispatch = useDispatch();
  // const { loading } = useSelector((state) => state.alerts);
  // console.log("loading", loading);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to Home page");
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong!");
    }
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
