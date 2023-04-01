import React from "react";
import { Row, Col, Typography, ConfigProvider, Space } from "antd";
import Icon from "@mdi/react";
import { mdiCellphone, mdiMail } from "@mdi/js";
const { Title, Paragraph } = Typography;
const contact = () => {
  return (
    <Row >
      <Col xl={8} style={{ padding: "3rem 2rem 6rem", backgroundColor: "#ad4bcd" }}>
        <ConfigProvider
          theme={{
            token: {
              colorText: "#fff",
            },
          }}
        >
          <Title level={1}>Contacto</Title>
          <Paragraph>
            Completa el formulario y nosotros nos comunicamos contigo en menos
            de 24 horas
          </Paragraph>
          <Space size="large" style={{marginTop: '4rem'}}>
            <Icon path={mdiCellphone} size={1} color="#fff" />
            <Title level={3}>04126947694</Title>
          </Space>
          <Space size="large" style={{marginTop: '3.5rem'}}>
            <Icon path={mdiMail} size={1} color="#fff" />
            <Title level={3}>xaviermayora20@gmail.com</Title>
          </Space>
        </ConfigProvider>
      </Col>
      <Col xl={16}>

        formulario
      </Col>
    </Row>
  );
};

export default contact;
