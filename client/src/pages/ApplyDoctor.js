import React from "react";
import Layout from "../components/Layout";
import { Button, Col, Form, Input, Row, TimePicker } from "antd";

const ApplyDoctor = () => {
  const onFinish = (values) => {
    console.log("values :>> ", values);
  };

  return (
    <Layout>
      <h1 className="page-title">Apply Doctor</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <hr />
        <h5>Professional Information</h5>
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} lg={8}>
            {/* name="firstName" should same at model */}
            <Form.Item required label="First Name" name="firstName" rules={[{ required: true }]}>
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Last Name" name="lastName" rules={[{ required: true }]}>
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
          {/* <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Email" name="email" rules={[{ required: true }]}>
              <Input placeholder="Email" />
            </Form.Item>
          </Col> */}
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Phone Number" name="phoneNumber" rules={[{ required: true }]}>
              <Input placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Website" name="website" rules={[{ required: true }]}>
              <Input placeholder="Website" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Address" name="address" rules={[{ required: true }]}>
              <Input placeholder="Address" />
            </Form.Item>
          </Col>
        </Row>

        <hr />
        <h5>Professional Information</h5>
        <Row gutter={16}>
          <Col span={8} xs={24} sm={24} lg={8}>
            {/* name="firstName" should same at model */}
            <Form.Item required label="Specialization" name="specialization" rules={[{ required: true }]}>
              <Input placeholder="Specialization" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Experience" name="experience" rules={[{ required: true }]}>
              <Input placeholder="Experience" type="number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Fee Per Consultation" name="feePerConsultation" rules={[{ required: true }]}>
              <Input placeholder="Fee Per Consultation" type="number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Timings" name="timings" rules={[{ required: true }]}>
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <Button className="primary-button" htmlType="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
