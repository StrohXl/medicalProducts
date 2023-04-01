import { Row, Col } from "antd";
import React from "react";
import Card1 from "../cards/card1";
const data = [
  {
    id: 1,
    title: "Atamel",
    img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
    price: "80,14",
  },
  {
    id: 2,
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    id: 3,
    title: "Atamel",
    img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
    price: "80,14",
  },
  {
    id: 4,
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    id: 5,
    title: "Atamel",
    img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
    price: "80,14",
  },
  {
    id: 6,
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    id: 7,
    title: "Atamel",
    img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
    price: "80,14",
  },
  {
    id: 8,
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    id: 9,
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    id: 10,
    title: "Atamel",
    img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
    price: "80,14",
  },
  {
    id: 11,
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    id: 12,
    title: "Atamel",
    img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
    price: "80,14",
  },


];

const cards = () => {
  return (
    <Row justify={"space-between"} wrap gutter={[10, 20]}>
      {data.map((i) => {
        return (
          <Col key={i.id} xs={12} md={8} lg={6} xl={4}>
            <Card1 i={i}/>
          </Col>
        );
      })}
    </Row>
  );
};

export default cards;
