import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import { Table } from "antd";
import { Divider } from "antd";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
const Categorie = () => {
  // RUTAS
  const url = "http://localhost:8000/api";
  const endPoint = "/categories/";
  const endPointGet = "/sub_categories/";

  // VARIABLES DE ESTADO
  const [data, setData] = useState([]);
  const [actualizar, setActualizar] = useState(false);

  // FUNCIONES
  const LoadData = async () => {
    const { data } = await axios.get(`${url}${endPointGet}`);
    setData(data);
    console.log(data)
  };
  useEffect(() => {
    LoadData();
  }, [actualizar]);

  // COLUMNAS DE LA TABLA
  const columns = [
    {
      dataIndex: "id",
      width: 50,
      key: "id",
    },
    {
      key: "name",
      title: "Nombre de la Sub Categoria",
      dataIndex: "name",
    },
    {
      key: "id",
      title: "Categoria vinculada",
      dataIndex: "id",
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          endPoint={endPoint}
          titleModal='Editar Categoria'
          titlePopConfirm="la Categoria"
          id={record}
          Actualizar={() => setActualizar(!actualizar)}
        />
      ),
      width: 200,
    },
  ];
  const router = useRouter()
  return (
    <>
      <TitleAndAccion
        title={"Sub Categorias"}
        accion={()=>router.push('/admin/createSubCategorie')}
        textButton={"Agregar nueva Sub Categoria"}
      />
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default Categorie;
