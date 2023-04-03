import React, { useState } from "react";
import { items } from "./itemsNav";
import {
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import {
  Menu,
  Typography,
  Tooltip,
  Space,
  Button,
  theme,
  Row,
  Col,
} from "antd";
import InputSearch from "../inputSearch";
import Link from "next/link";
import { ConfigProvider } from "antd";
const { Title } = Typography;

const Nav = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const CssCol = { lineHeigth: "100%" };

  return (
    <>
      <Row gutter={20} style={{padding: "5px 0 0" }}>
        <Col xl={4.7}>
          <Link href={"/"}>
 
              <Title level={3} style={{padding: "2px 0 0" }}>
                <span style={{ color: "#1677ff", fontWeight: 'bold' }}>MEDIC</span>
                <span style={{ color: token.colorSecondary }}>PRODUCTS  </span>
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
            <a href={"/login"}>
              <Tooltip
                title="Ingresar"
                arrow={false}
                style={{ paddingTop: "30px" }}
              >
                <Button
                  shape="circle"
                  size="large"
                  type="default"
                  icon={<UserOutlined />}
                />
              </Tooltip>
            </a>
       
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
            className="menu"
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
