import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import axios from "axios";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import { Table } from "antd";
import { Avatar } from "antd";
import { Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActualizar,
  changeFormType,
  changeLabelName,
  changeMessageNotification,
  changeModalType,
  changeOpenModal,
  changeTitleModal,
} from "<negocio>/src/app/features/Data/dataExtra";
import { loadData } from "<negocio>/src/app/features/Data/LoadData";
import { loadEditData } from "<negocio>/src/app/features/Data/editData";
import ModalForm from "<negocio>/components/admin/modal";
const index = () => {
  // VARIABLES
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const router = useRouter();
  const id = router.query.id;
  const data = useSelector(state=>state.load.value)
  const actualizar = useSelector(state=>state.extra.actualizar)
  // RUTAS
  const [endPoint, setEndPoint] = useState();
  const [idProduct, setIdProduct] = useState('')

  // VARIABLES DE ESTADO

  // FUNCIONES
  const openModal = () => {
    dispatch(changeOpenModal(true))
    dispatch(changeTitleModal('Agregar Producto'))
    dispatch(changeFormType('formProductsCategory'))
    dispatch(changeModalType('post'))
    setEndPoint('/products/')
  };
  const openModalEdit = (id) => {
    setIdProduct(id)
    setEndPoint('/products/'+id)
    dispatch(changeOpenModal(true))
    dispatch(changeTitleModal('Editar Producto'))
    dispatch(changeFormType('formProductsCategory'))
    dispatch(changeModalType('put'))
    dispatch(loadEditData('/products/'+id))
  };

  const LoadData = async () => {
    dispatch(changeMessageNotification('el Producto'))
    dispatch(changeLabelName('Nombre del Producto'))
    dispatch(loadData({endPoint: '/products/', value: id}))
    const dataCategory = await axios.get('http://localhost:8000/api/categories')
    const filter = dataCategory.data.filter(i=> i.id == id)
    setTitle(filter.length > 0? filter[0].name: 'no hay datos')
  };
  useEffect(() => LoadData, [actualizar]);

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
      key: "category",
      title: "Categoria",
      dataIndex: "category",
    },
    {
      key: "precio",
      title: "Precio del Producto",
      dataIndex: "precio",
      render:(data,record)=>(<p>{data == null? 'No tiene precio': data.price}</p>)
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          id={record.id}
          Actualizar={() => dispatch(changeActualizar(!actualizar))}
          endPoint={"/products/"}
          titlePopConfirm={"este Producto?"}
          functionEdit={() => openModalEdit(record.id)}
        />
      ),
    },
  ];


  return (
    <>
      <TitleAndAccion
        title={title}
        accion={openModal}
        textButton={"Agregar Producto"}
        showInputSearch={true}
      />
      <Divider />
      <Table dataSource={data} columns={columns} />
      <ModalForm endPoint={endPoint} id={idProduct}/>
    </>
  );
};

export default index;
