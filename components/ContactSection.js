// components/ContactSection.js
import React from 'react';
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const ContactSection = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Here you would typically send these values to a server
  };

  return (
    <div>
      <Title>Contact Me</Title>
      <Form name="contact" onFinish={onFinish} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="message" label="Message" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactSection;