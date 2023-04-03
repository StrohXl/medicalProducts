import { Space } from "antd";
import { Col, Row, Typography, theme } from "antd";
import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiTwitter,
  mdiCellphone,
  mdiFacebook,
  mdiInstagram,
  mdiEmail,
  mdiYoutube,
} from "@mdi/js";
const { Title, Paragraph } = Typography;
import React from "react";
const navegacion = [
  {
    title: "Medicamentos",
    path: "/medicamentos",
  },
  {
    title: "Ofertas de la semana",
    path: "/ofertasDeLaSemana",
  },
  {
    title: "Bebe",
    path: "/bebe",
  },
  {
    title: "Informacion",
    path: "/informacion",
  },
];
const contacto = [
  {
    title: "04126947694",
    icon: mdiCellphone,
  },
  {
    title: "xaviermayora20@gmail.com",
    icon: mdiEmail,
  },
];
const services = ["Envios", "Consultas", "Compras", "Ventas"];
const icons = [mdiTwitter, mdiFacebook, mdiInstagram, mdiYoutube];

const footer = () => {
  const { token } = theme.useToken();
  return (
    <Row gutter={[20, 30]}>
      <Col xs={24} md={24} lg={9}>
        <Link href={"/"}>
          <Title level={3}>
            <span style={{ color: "#1677ff" }}>Medic</span><span style={{color: token.colorSecondary}}>Products</span>
          </Title>
        </Link>
        <Paragraph>
          Donde sea que estes compra tus medicinas con solo presionar un botom.
          Ofrecemos los mejores servicios de envio
        </Paragraph>
        <div style={{ marginTop: "2rem" }}>
          <Space size={"large"}>
            {icons.map((i, index) => (
              <Icon key={index} path={i} size={0.8} color={"#aaa"} />
            ))}
          </Space>
        </div>
      </Col>
      <Col xs={24} md={8} lg={5}>
        <Title level={3}>Navegacion</Title>
        {navegacion.map((i, index) => (
          <Link key={index} href={i.path}>
            <Paragraph>{i.title}</Paragraph>
          </Link>
        ))}
      </Col>
      <Col xs={24} md={8} lg={5}>
        <Title level={3}>Servicios</Title>
        {services.map((i, index) => (
          <Link key={index} href={"/"}>
            <Paragraph>{i}</Paragraph>
          </Link>
        ))}
      </Col>
      <Col xs={24} md={8} lg={5}>
        <Title level={3}>Contacto</Title>
        {contacto.map((i, index) => (
          <div key={index}>
            <Space size="middle">
              <Icon path={i.icon} size={1} color={token.colorSecondary} />
              {i.title}
            </Space>
          </div>
        ))}
      </Col>
      <Col span={24} style={{ textAlign: "center", marginTop: "3rem" }}>
        <Paragraph>@2023 Medic Produts</Paragraph>
      </Col>
    </Row>
  );
};

export default footer;
