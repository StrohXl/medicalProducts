import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import { Button, Table } from "antd";
import { Divider } from "antd";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import ModalForm from "<negocio>/components/admin/modal";
import Link from "next/link";

const Categorie = () => {
  // RUTAS
  const url = "http://localhost:8000/api";
  const endPoint = "/categories/";
  const endPointGet = "/categories";

  // VARIABLES DE ESTADO
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [actualizar, setActualizar] = useState(false);

  // FUNCIONES

  const LoadData = async () => {
    const { data } = await axios.get(`${url}${endPointGet}`);
    setData(data);
  };
  const CloseModal = () => {
    setOpenModal(false);
    setActualizar(!actualizar);
  };
  const Create = ()=>{
    setOpenModal(true) 
  }


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
      title: "Nombre de la Categoria",
      dataIndex: "name",
      render: (data, record)=>(<Link  href={`/admin/categories/${record.id}` } >{data}</Link>)
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          endPoint={endPoint}
          titleModal='Editar Categoria'
          titlePopConfirm="la Categoria"
          id={record.id}
          Actualizar={() => setActualizar(!actualizar)}
        />
      ),
      width: 200,
    },
  ];
  return (
    <>
      <TitleAndAccion
        title={"Categorias"}
        accion={Create}
        textButton={"Agregar nueva Categoria"}
      />
      <ModalForm
        isOpenModal={openModal}
        handleOk={CloseModal}
        handleCancel={() => setOpenModal(false)}
        titleModal={'Nueva categoria'}
        endPoint={endPoint}
        titlePopConfirm="la Categoria"
        value={null}
        formType='categories'
      />
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default Categorie;
