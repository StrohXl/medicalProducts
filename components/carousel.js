import React from "react";
import { Carousel, Button } from "antd";
const carousel = () => {
  const onChange = (e) => {
    console.log(e);
  };
  const urlImage = [
    "https://pbs.twimg.com/media/ESgP6u7WoAAZLEy.png",
    "https://st4.depositphotos.com/16318796/24452/i/600/depositphotos_244520302-stock-photo-happy-healthy-woman-smiling-buying.jpg",
    "https://img.freepik.com/foto-gratis/vista-cerca-mano-farmaceutico-tomando-caja-medicina-estante-farmacia_342744-320.jpg?w=2000",
    "https://img.freepik.com/fotos-premium/retrato-farmaceutico-hermoso-alegre-que-inclina-contador-drogueria_109710-1738.jpg",
  ];
  return (
    <Carousel
      pauseOnFocus={true}
      pauseOnHover={false}
      autoplay
      prevArrow={true}
      nextArrow={true}
      style={{
        height: "350px",
        padding: '0',
        width: '100%'
  
      }}
    >
      {urlImage.map((i) => {
        return (
          <div >
            <img src={i} style={{ width: "100%", height: "350px" }} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default carousel;
