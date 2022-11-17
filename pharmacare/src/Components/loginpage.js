import "./loginpage.css";
import React from "react";
import { Button, Checkbox, Form, Input} from "antd";
import Paper from '@mui/material/Paper';
import Footer from "./Footer";

export default function Login() {
  const onLogin = (values) => {
    console.log("Loged In", values);
  };

  const loginFailed = (errorInfo) => {
    console.log("Login Failed!", errorInfo);
  };
  return (
    <div>
      <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
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
          Log In
        </Button> <br/>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
      </form>
      </Paper>
      <Footer/>
      
    </div>
 
  );
}
