import { Row, Col, Card, Button, Typography, Space } from "antd";
import React from "react";
const { Title } = Typography;
import { ShoppingCartOutlined } from "@ant-design/icons";
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
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
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
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
  {
    title: "Acetaminofen",
    img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
    price: "60,14",
  },
];

const cards = () => {
  return (
    <Row justify={"space-between"} wrap gutter={[10, 20]}>
      {data.map((i) => {
        return (
          <Col key={i.id} span={4}>
            <div
              style={{
                border: "1px solid #ddd",
                background: "#fff",
                borderRadius: "10px",
                height: "300px",
                padding: "1rem 1rem",
              }}
            >
              <img src={i.img} style={{ height: "150px", width: "100%" }} />
              <Title level={5}>{i.title}</Title>

              <Title color="primary" level={5}>BS. {i.price}</Title>

              <Button
                size="large"
                type="default"
                style={{ width: "100%", lineHeight: "100%", display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}
              >
                <ShoppingCartOutlined />
                Anadir
              </Button>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default cards;
