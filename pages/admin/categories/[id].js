import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import { Table } from "antd";
import ModalForm from "<negocio>/components/admin/modal";
import { Avatar } from "antd";
import { Divider } from "antd";
const index = () => {
  // VARIABLES
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  // RUTAS
  const ruta = "http://localhost:8000/api";
  const endPoint = "/products/";

  // VARIABLES DE ESTADO
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [actualizar, setActualizar] = useState(false)
  const [openModal, setOpenModal] = useState(false);

  // FUNCIONES
  const CloseModal = () => {
    setOpenModal(false);
    setActualizar(!actualizar)
  };
  const onSearch = async (value) => {
    console.log(value.target.value);
    const { data } = await axios.get(`${ruta}/products`, {
      params: {
        search: value.target.value,
        category: id,
      },
    });
    setData(data);
  };

  // COLUMNAS DE LA TABLA
  const columns = [
    {
      key: "avatar",
      title: "",
      dataIndex: "productImage",
      width: 100,
      render: (data, record) => (
        <Avatar src={`http://localhost:8000${data}`} size={60} />
      ),
    },
    {
      key: "name",
      title: "Nombre del Producto",
      dataIndex: "name",
    },
    {
      key: "description",
      title: "Descripcion del Producto",
      dataIndex: "description",
    },
    {
      key: "stock",
      title: "Existentes",
      dataIndex: "stock",
    },
    {
      key: "price",
      title: "Precio del Producto",
      dataIndex: "price",
    },
    {
      title: 'Acciones',
      render:(data,record)=>(
        <ButtonsTable
        id={record.id}
        Actualizar={()=>setActualizar(!actualizar)}
        endPoint={endPoint}
        titlePopConfirm={'este Producto?'}
        titleModal={'Editar Producto'}
        />)
      
    }

  ];

  // FUNCIONES LOADDATA
  const LoadData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/products?category=${id}`
      );
      setData(data);
      console.log(data);
      const title = await axios.get(
        `http://localhost:8000/api/categories/${id}`
      );
      setTitle(title.data.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => LoadData, [actualizar]);
  return (
    <>
      <TitleAndAccion
        title={title}
        accion={()=>setOpenModal(true)}
        textButton={"Agregar Producto"}
        showInputSearch={true}
        onSearch={onSearch}
      />
      <ModalForm
        isOpenModal={openModal}
        handleOk={CloseModal}
        handleCancel={() => setOpenModal(false)}
        titleModal={"Nuevo Producto"}
        endPoint={endPoint}
        titlePopConfirm="el Producto"
        value={null}
        formType="products"
      />
      <Divider />
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default index;
