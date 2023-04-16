import { Button, Col, Row, Typography } from "antd";
import InputSearch from "../nav/inputSearch";
const { Title } = Typography;
import axios from "axios";
import React from "react";
const url = "http://localhost:8000/api";

const titleAndAccion = ({ accion, title, textButton, showInputSearch }) => {

  return (
    <Row gutter={[20, 20]} justify={"space-between"}>
      <Col span={12}>
        <Title level={3}>{title}</Title>
      </Col>
      <Col span={12}>
        {showInputSearch ? <InputSearch /> : ""}
      </Col>
      <Col span={24}>
        <Button type="primary" onClick={accion}>
          {textButton}
        </Button>
      </Col>
    </Row>
  );
};

export default titleAndAccion;
