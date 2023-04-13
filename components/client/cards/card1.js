import { ConfigProvider,Card, Typography, Button, theme, Row, Col } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const { Title } = Typography;

const card1 = ({}) => {
  const router = useRouter();
  const { token } = theme.useToken();
  const datos = useSelector((state) => state.load.value);

  return (
    <Row gutter={[20, 20]}> 
      {datos.length > 0? datos.map((i, index) => (
        <Col key={index} xs={12} md={8} lg={6}>
          <Card
          hoverable
          cover={<img src={`http://localhost:8000/${i.productImage}`} style={{ height: "150px", width: "100%" }} />}
          >        
            <Title level={5}>{i.name}</Title>
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
      )): <Title level={5}>Lo sentimos no tenemos productos disponibles para esta categoria</Title>}
    </Row>
  );
};

export default card1;
