import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ofertas } from "../items/ofertas";
import { Col, ConfigProvider, Row, Typography, theme } from "antd";
const { Title, Paragraph } = Typography;
const carouselOfertas = () => {
  const [arrows, setArrows] = useState(false);
  const { token } = theme.useToken();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const mouseHover = () => {
    const oferta = document.querySelector(".CarouselOfertas");

    oferta.addEventListener("mouseenter", () => setArrows(true));
    oferta.addEventListener("mouseleave", () => setArrows(false));
  };

  useEffect(() => mouseHover(), []);
  return (
    <>
      <Row gutter={[30, 30]} className="margin">
        <Col span={24}>
         <ConfigProvider theme={{token:{colorTextHeading: '#888'}}}>
             <Title level={3}>OFERTAS DE LA SEMANA</Title>
         </ConfigProvider>
        </Col>
        <Col span={24}>
          <Carousel
            className="CarouselOfertas"
            responsive={responsive}
            arrows={arrows}
            infinite={true}
            slidesToSlide={5}
          >
            {ofertas.map((i, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #eee",
                  background: "#fff",
                  borderRadius: "4px",
                  height: "225px",
                  padding: "1rem 1rem",
                  margin: ".5rem",
                }}
                className="cards3"
              >
                <img src={i.img} style={{ height: "125px", width: "100%" }} />
                <Title level={5} style={{marginBottom: 0}} >
                  {i.title}
                </Title>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#ad4bcd",
                    },
                  }}
                >
               
                    <Title  style={{marginTop: 0}}level={4}>$ 20</Title>
       
                </ConfigProvider>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default carouselOfertas;
