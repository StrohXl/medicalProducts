import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";
import axios from "axios";
import { Error } from "../notifications";

const formLogin = () => {
  const router = useRouter();
  const onFinish = async (form) => {
    try {
      const {
        data: { token },
      } = await axios.post("http://localhost:8000/api/login", form);
      Cookies.set('token', token)
      location.href = "/admin"
    } catch (error) {
      error.response.status == 400?
      Error(error.response.data.msg):
      console.log(error)
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
