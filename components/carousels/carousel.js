import React from "react";
import { Carousel } from "antd";
import "react-multi-carousel/lib/styles.css";
const carousel = () => {
  const urlImage = [
    {
        img: "https://pbs.twimg.com/media/ESgP6u7WoAAZLEy.png",
        title: 'Aprovecha nuestras Mejores ofertas'
    },
    {
      img: "https://img.freepik.com/fotos-premium/retrato-farmaceutico-hermoso-alegre-que-inclina-contador-drogueria_109710-1738.jpg",
      title: 'Lleve los mejores productos',
    },
    {
      img: "https://st4.depositphotos.com/16318796/24452/i/600/depositphotos_244520302-stock-photo-happy-healthy-woman-smiling-buying.jpg",    
      title: '10% de Descuento en Atamel',
    },
    {
      img: "https://img.freepik.com/foto-gratis/vista-cerca-mano-farmaceutico-tomando-caja-medicina-estante-farmacia_342744-320.jpg?w=2000",
      title: 'Confianza y Seguridad al comprar',
    },

    
  ];
  return (
    <>
      <Carousel
        pauseOnFocus={true}
        pauseOnHover={false}
        prevArrow={true}
        autoplay
        speed={1000}
        style={{marginTop: '2rem'}}
        nextArrow={true}

      >
        {urlImage.map((i) => {
          return (
            <div className="content_carousel">
              <div style={{ width: "60%", padding: '2rem 8rem 2rem 2rem', color: '#fff', fontSize: '1.5rem' }}>
                <h1>{i.title}</h1>
              </div>
              <div style={{ width: "40%" }}>
                <img
                  src={i.img}
                  style={{ width: "100%", height: '100%', borderTopLeftRadius: "15rem", borderBottomLeftRadius: '15rem' }}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default carousel;
