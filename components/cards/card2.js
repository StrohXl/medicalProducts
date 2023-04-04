import React from "react";
import { Col, ConfigProvider, Row, Typography, theme } from "antd";
const { Title, Paragraph } = Typography;
const card2 = ({ i, title, data }) => {
  const { token } = theme.useToken();
  return (
    <Row className="margin" gutter={[10,20]}>
      <Col span={24} >
        <Title level={3}>
        {title}
        </Title>
      </Col>
      {data.map((i, index) => (
        <Col xs={12}  md={8} lg={6} xl={4}>
          <div
            style={{
              border: "1px solid #eee",
              background: "#fff",
              borderRadius: "4px",
              height: "225px",
              padding: "1rem 1rem",
            }}
          >
            <img src={i.img} style={{ height: "125px", width: "100%" }} />
            <Title level={5} style={{ textAlign: "center", width: "100%" }}>
              {i.title}
            </Title>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#ad4bcd",
                },
              }}
            >
              <ConfigProvider
                theme={{ token: { colorText: token.colorSecondary } }}
              >
                <Paragraph>En Oferta</Paragraph>
              </ConfigProvider>
            </ConfigProvider>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default card2;
