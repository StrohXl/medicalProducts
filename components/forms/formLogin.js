import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import Link from "next/link";

const formLogin = () => {
  const onFinish = (e) => {
    console.log(e);
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
        size={'large'}
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
