import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'
import Link from "next/link";
import axios from "axios";

const formLogin = () => {
  const router = useRouter();
  const onFinish = async (form) => {
   if( form.username == "Admin" && form.password == "1234567890"){
    const {data: {token}} = await axios.post('http://localhost:8000/api/login', form)
    axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    Cookies.set('token', token)
    router.push('/admin')
   }
   else{
    alert('error')
   }
      
  };
  return (
    <Form
      style={{ width: "320px" }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Porfavor escriba el nombre del Usuario!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Nombre de Usuario"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Porfavor escriba la contrasena!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contrasena"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recordarme</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Space
          size={"large"}
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            style={{ width: "320px" }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Ingresar
          </Button>

          <Link href="/registerUser">Registrarte ahora!</Link>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default formLogin;
