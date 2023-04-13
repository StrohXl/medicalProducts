import React from "react";
import { Typography, theme, Row, Col, Dropdown, Button } from "antd";
import { mdiAccount, mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";
import { Avatar } from "antd";
import { Space } from "antd";
import Link from "next/link";

const { Title } = Typography;

const Nav = () => {
  const items = [
    {
      key: 1,
      label: 'Opcion 1'
    },
    {
      key: 2,
      label: 'Configuracion'
    },
    {
      key: 3,
      label: (
        <Link href={'/login'}>
            Salir 
        </Link>
      ),
      icon: <Icon size={0.8} path={mdiLogout} />
      
    },
  ];
  return (
    <>
      <Row>
        <Col span={12}>
          <Title level={3} style={{ paddingTop: "12px" }}>
            <span style={{ color: "#1677ff", fontWeight: "bold" }}>MEDIC</span>
            <span style={{ color: "#fff" }}>PRODUCTS </span>
          </Title>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button style={{padding: '2px 0 0 '}} shape="circle" type="default" size="large" icon={<Icon size={1.3} path={mdiAccount} />} />
          </Dropdown>
        </Col>
      </Row>
    </>
  );
};

export default Nav;
