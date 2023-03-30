import React, { useState } from "react";
import {
  TagOutlined,
  RestOutlined,
  BookOutlined,
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu, Typography, Tooltip, Space, Button } from "antd";
import InputSearch from "./inputSearch";
import Link from "next/link";
const { Title } = Typography;
const items = [
  {
    label: <Space>Medicinas<DownOutlined  style={{fontSize: '10px'}} /></Space>,
    key: 1,
    icon: <RestOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Ofertas de la semana",
    key: 2,
    icon: <TagOutlined />,
  },
  {
    label: <Space>Doctores <DownOutlined style={{fontSize: '10px'}}/></Space>,
    key: 3,
    icon: <UserOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Informacion",
    key: "alipay",
    icon: <BookOutlined />
  },
];

const Nav = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          paddingTop: "5px",
        }}
      >
        <Space>
          <Link href={'/'}>
          <Title level={3}>Medic Products</Title>
          </Link>
          <InputSearch />
        </Space>
        <Space size="large">
          <Link href={'/buy'}>
          <Tooltip title="Comprar" >
            <Button
              shape="circle"
              size="large"
              type="default"
              icon={<ShoppingCartOutlined />}
            />
          </Tooltip>
          </Link>
          <a href={'/login'}>
          <Tooltip title="Ingresar">
            <Button
              shape="circle"
              size="large"
              type="default"
              icon={<UserOutlined />}
            />
          </Tooltip>
          </a>
        </Space>
      </div>

      <Menu
        style={{ background: "#fff0,", borderBottom: "0" }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default Nav;
