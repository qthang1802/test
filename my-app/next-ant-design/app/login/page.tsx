'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { Form, Input, Button, message } from 'antd';

const LoginPage = () => {
  const router = useRouter();

  const onFinish = (values: { username: string; password: string }) => {
    const { username, password } = values;

    if (username === 'admin' && password === 'admin') {
      setCookie(null, 'authToken', 'your-auth-token', {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      });
      message.success('Login successful!');
      router.push('/'); // Redirect to the root page
    } else {
      message.error('Invalid username or password!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form
        name="login"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 300 }}
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
    </div>
  );
};

export default LoginPage;