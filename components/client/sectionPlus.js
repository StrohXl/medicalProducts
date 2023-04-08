import { Row, Col, Typography, theme } from "antd";
const { Title, Paragraph } = Typography;
import React from "react";
import Icon from "@mdi/react";
import { mdiTruckFast, mdiCartCheck, mdiCashRefund   } from "@mdi/js";
import { ConfigProvider } from "antd";

const muestra = () => {
  const { token } = theme.useToken();
  return (
    <Row gutter={[40, 20]} justify={"center"} className="section-plus">
      <ConfigProvider
        theme={{
          token: {},
          components: { Typography: { colorTextHeading: "#1472c9" } },
        }}
      >
        <Col span={24}>
          <Title level={2}>Llevamos la salud a su casa</Title>
        </Col>
        <Col md={8} xs={24}>
          <Icon path={mdiCartCheck} size={4} color={"#1472c9"} />
          <Title level={5}>PAGOS SEGUROS</Title>
          <Paragraph>
            Estamos comprometidos en ofrecer la mayor seguridad al comprara
          </Paragraph>
        </Col>
        <Col md={8} xs={24}>
          <Icon path={mdiCashRefund} size={4} color={"#1472c9"} />
          <Title level={5}>GARANTIA DE REMBOLSO</Title>
          <Paragraph>
            Garantía de devolución del 100% dentro de los 5 días posteriores al
            pago.
          </Paragraph>
        </Col>
        <Col md={8} xs={24}>
          <Icon path={mdiTruckFast} size={4} color={"#1472c9"} />
          <Title level={5}>ENTREGA RAPIDA Y GRATUITA</Title>
          <Paragraph>
            Le proporcionamos una entrega rápida y gratuita del producto.
          </Paragraph>
        </Col>
      </ConfigProvider>
    </Row>
  );
};

export default muestra;
