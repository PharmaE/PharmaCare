import "./loginpage.css";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

export default function Login() {
  const onLogin = (values) => {
    console.log("Loged In", values);
  };

  const loginFailed = (errorInfo) => {
    console.log("Login Failed!", errorInfo);
  };
  return (
    <div>
      <header>
        <h1>PharmaCare</h1>
      </header>

      <form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          remember: true,
        }}
        onLogin={onLogin}
        loginFailed={loginFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please Input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </form>
    </div>
  );
}
