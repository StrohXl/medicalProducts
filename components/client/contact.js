import React from "react";
import { Row, Col, Typography, ConfigProvider, Space, theme } from "antd";
import Icon from "@mdi/react";
import { mdiCellphone, mdiEmail } from "@mdi/js";
import FormContact from "../admin/forms/formContact";

const { Title, Paragraph } = Typography;
const contact = () => {
  const { token } = theme.useToken();
  return (
    <Row style={{marginTop: '2rem'}} className="margin">
      <Col
        xs={24}
        lg={8}
        style={{
          padding: "3rem 2rem 8rem",
          backgroundColor: token.colorSecondary,
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
        }}
      >
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
          <div>
            <Space size="middle" style={{ marginTop: "3rem" }}>
              <Icon path={mdiCellphone} size={1} color="#fff" />
              <Title level={5}>04126947694</Title>
            </Space>
          </div>
          <div>
            <Space size="middle" style={{ marginTop: "1rem" }}>
              <Icon path={mdiEmail} size={1} color="#fff" />
              <Title level={5}>xaviermayora20@gmail.com</Title>
            </Space>
          </div>
        </ConfigProvider>
      </Col>
      <Col
        lg={16}
        xs={24}
        style={{
          padding: "4rem 2rem 0",
          background: "#fff",
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
      >
        <FormContact />
      </Col>
    </Row>
  );
};

export default contact;
