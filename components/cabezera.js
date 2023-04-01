import React from 'react';
import Carousel from './carousel'
import Cards2 from './listCards/listCards2';
import { Typography, ConfigProvider } from 'antd';
const {Title} = Typography
const data = [
    {
      id: 1,
      title: "Atamel",
      img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
      price: "80,14",
    },
    {
      id: 2,
      title: "Acetaminofen",
      img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
      price: "60,14",
    },
    {
      id: 3,
      title: "Atamel",
      img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
      price: "80,14",
    },
    {
      id: 4,
      title: "Acetaminofen",
      img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
      price: "60,14",
    },
    {
      id: 5,
      title: "Atamel",
      img: "https://farma-valor.com/site/wp-content/uploads/2021/01/atemal-001.jpg",
      price: "80,14",
    },
    {
      id: 6,
      title: "Acetaminofen",
      img: "https://www.farmago.com.ve/wp-content/uploads/2020/12/imagen5-01-30.png",
      price: "60,14",
    },
    


  ];
const cabezera = () => {
   
    return (
        <>
            <Carousel/>
            <div style={{padding: '2rem 0'}}>
                <Cards2 data={data} />
            </div>
        </>
    );
};

export default cabezera;