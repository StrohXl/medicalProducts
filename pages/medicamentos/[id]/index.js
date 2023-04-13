import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography } from "antd";
import Card1 from "<negocio>/components/client/cards/card1";
import { loadData } from "<negocio>/src/app/features/Data/Data";
import { useDispatch } from "react-redux";
const { Title } = Typography;
const index = () => {
  const router = useRouter();
  console.log(router.query)
  const dispath = useDispatch();
  const CargarDatos = () => {
    dispath(loadData({endPoint: '/products', value: router.query.value}));
  };
  useEffect(() => {
    CargarDatos();
  }, [router]);
  return (
    <div className="margin">
      <Title>{router.query.id}</Title>
    <Card1/>
    </div>
  );
};

export default index;
