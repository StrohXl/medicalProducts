import { Row, Col } from "antd";
import React from "react";
import Card1 from "../cards/card1";
import { data } from "./itemsCards1";

const cards = () => {
  return (
    <Row justify={"space-between"} wrap gutter={[10, 20]}>
      {data.map((i, index) => {
        return (
          <Col key={index} xs={12} md={8} lg={6} xl={4}>
            <Card1 i={i}/>
          </Col>
        );
      })}
    </Row>
  );
};

export default cards;
