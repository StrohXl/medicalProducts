import React from "react";
import { Row, Col, Typography, Button, ConfigProvider, theme } from "antd";
import { Inter, Lora } from "next/font/google";
const { Title, Text } = Typography;
const inter = Inter({ subsets: ["latin"] });
const robot = Lora({ weight: "600", style: "normal", subsets: ["latin"] });
const card4 = ({ data, title, limite }) => {
  const {token} = theme.useToken()
  let xl = 12
  return (
    <Row gutter={[20, 20]} className="margin">
      <Col span={24}>
      <ConfigProvider theme={{token:{colorTextHeading: '#888'}}}>
          <Title level={3}>
            {title.toUpperCase()}
          </Title>
      </ConfigProvider>
      </Col>
      {data.map((i, index) =>{
        if(index <= limite ){

          if(index == 2) xl = 24
          return(
            <Col xs={24} xl={xl}>
            <Row
              key={index}
              className={`cards3 ${robot.className}`}
              style={{ height: '225px', borderRadius: "4px" }}
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
                    components: { Typography: { colorTextHeading: "#444" } },
                  }}
                >
                  <p style={{ marginTop: 0, marginBottom: 0, fontSize: "12px" }}>
                    ENVIO GRATIS
                  </p>
                  <Title style={{ marginTop: 0 }} level={3}>
                    {i.title}
                  </Title>
                </ConfigProvider>
                <Button
                  type="primary"
                  style={{ width: "100px", marginTop: "20px" }}
                >
                  Ver mas
                </Button>
              </Col>
              <Col span={12} style={{ borderTopLeftRadius: "4px" }}>
                <img
                  src={i.img}
                  style={{
                    height: '225px',
                    width: "100%",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                  }}
                />
              </Col>
            </Row>
          </Col>
          )
        }
      })}
    </Row>
  );
};

export default card4;
