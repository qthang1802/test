'use client';

import React from 'react';
import { Form, Input, Button, message } from 'antd';

interface LoginFormValues {
  username: string;
  password: string;
}

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const onFinish = (values: LoginFormValues) => {
    const { username, password } = values;

    if (username === 'admin' && password === 'admin') {
      message.success('Login successful!');
      onLoginSuccess(); // Notify parent component of successful login
    } else {
      message.error('Invalid username or password!');
    }
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 300, margin: 'auto' }}
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;