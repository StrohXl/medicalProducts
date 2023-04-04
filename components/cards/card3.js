import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { Inter, Lora } from "next/font/google";
import { ConfigProvider } from "antd";
const { Title, Text } = Typography;
const inter = Inter({ subsets: ['latin'] })
const robot = Lora({weight: '600', style: 'normal', subsets: ['latin'] })
const card4 = ({ i, altura, title }) => {
  return (
    <Row
    className={`cards3 ${robot.className }`}
      style={{ height: altura, borderRadius: "4px", }}
    >
      <Col
        span={12}
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ConfigProvider
          theme={{
            token: {},
            components: { Typography: {colorTextHeading:'#444'} },
          }}
        >
          <p style={{marginTop: 0, marginBottom: 0, fontSize: '12px'}}>ENVIO GRATIS</p>
          <Title style={{marginTop: 0}} level={3}>{title}</Title>
        </ConfigProvider>
        <Button type="primary" style={{width: '100px', marginTop: '20px'}}> 
            Ver mas
        </Button>
      </Col>
      <Col span={12} style={{ borderTopLeftRadius: "4px" }}>
        <img
          src={i.img}
          style={{
            height: altura,
            width: "100%",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        />
      </Col>
    </Row>
  );
};

export default card4;
