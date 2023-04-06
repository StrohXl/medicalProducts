import { ConfigProvider,Card, Typography, Button, theme, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const { Title } = Typography;

const card1 = ({ data }) => {
  const router = useRouter();
  console.log(router);
  const { token } = theme.useToken();
  return (
    <Row gutter={[20, 20]}> 
      {data.map((i, index) => (
        <Col key={index} xs={12} md={8} lg={6}>
          <Card
          hoverable
          cover={<img src={i.img} style={{ height: "150px", width: "100%" }} />}
          >        
            <Title level={5}>{i.title}</Title>
            <ConfigProvider
              theme={{
                token: {},
              }}
            >
              <Title level={5}>BS. {i.price}</Title>
              <ConfigProvider theme={{ token: {} }}>
                <Link href={`${router.asPath}/${i.title}`}>
                  <Button
                    size="large"
                    type="primary"
                    icon={ <ShoppingCartOutlined />}
                  >
                   
                    Solicitar
                  </Button>
                </Link>
              </ConfigProvider>
            </ConfigProvider>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default card1;
