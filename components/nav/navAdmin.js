import React from "react";
import { Typography, theme, Row, Col } from "antd";

const { Title } = Typography;

const Nav = () => {


  return (
    <>
      <Row >
        <Col span={5} >
          <Title level={3} style={{paddingTop: '12px'}}>
            <span style={{ color: "#1677ff", fontWeight: "bold" }}>MEDIC</span>
            <span style={{ color: "#fff" }}>PRODUCTS </span>
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default Nav;
