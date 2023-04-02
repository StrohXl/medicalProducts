import React, { useState } from "react";
import { items } from "./itemsNav";
import {
  TagOutlined,
  RestOutlined,
  BookOutlined,
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Menu, Typography, Tooltip, Space, Button, Row, Col } from "antd";
import InputSearch from "../inputSearch";
import Link from "next/link";
const { Title } = Typography;

const Nav = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const CssCol = { lineHeigth: "100%" };

  return (
    <>
      <Row style={{ gap: "0 40px", padding: '10px 0 0' }}>
        <Col xl={4}>
          <Link href={"/"}>
            <Title level={3}>
              <span style={{ color: "#1677ff" }}>Medic</span>Products
            </Title>
          </Link>
        </Col>
        <Col xs={0} md={10} style={{ lineHeight: "100%", paddingTop: "5px" }}>
          <InputSearch />
        </Col>
        <Col
        className="col_groupButtons"
          xs={0}
          md={4}
          style={{
            textAlign: "end",
            paddingTop: "4px",
            position: "absolute",
  
          }}
        >
          <Space size="large">
            <Link href={"/buy"}>
              <Tooltip title="Comprar" arrow={false} >
                <Button
                  shape="circle"
                  size="large"
                  type="default"
                  icon={<ShoppingCartOutlined />}
                />
              </Tooltip>
            </Link>
            <a href={"/login"}>
              <Tooltip title="Ingresar" arrow={false}  style={{paddingTop: '30px'}}>
                <Button
                  shape="circle"
                  size="large"
                  type="default"
                  icon={<UserOutlined />}
                />
              </Tooltip>
            </a>
          </Space>
        </Col>
        <Col
          md={0}
          xs={4}
          className="col_menu"
          style={{
            textAlign: "end",
            paddingTop: "4px",
            position: "absolute",
          }}
        >
          <Button type="text" icon={<MenuOutlined />} />
        </Col>
        <Col md={24} xs={0}>
          <Menu
            style={{ background: "#fff0,", borderBottom: "0" }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Col>
      </Row>
    </>
  );
};

export default Nav;
