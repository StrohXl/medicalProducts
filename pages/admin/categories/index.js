import React, { useState, useEffect } from "react";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import { Button, Table } from "antd";
import { Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import { useRouter } from "next/router";
import {
  changeOpenModal,
  changeFormType,
  changeModalType,
  changeTitleModal,
  changeLabelName,
  changeMessageNotification
} from "<negocio>/src/app/features/Data/dataExtra";
import { loadEditData } from "<negocio>/src/app/features/Data/editData";
import { loadData } from "<negocio>/src/app/features/Data/LoadData";
import ModalForm from "<negocio>/components/admin/modal";
import Link from "next/link";

const Categorie = () => {
    // VARIABLES DE ESTADO
  const router = useRouter()
  const [endPoint, setEndPoint] = useState("");
  const actualizar = useSelector(state=>state.extra.actualizar)
  const data = useSelector(state=>state.load.value)
  // FUNCIONES
  const dispatch = useDispatch();
  const LoadData = async () => {
    dispatch(loadData({endPoint: '/categories'}))
    dispatch(changeMessageNotification('la Categoria'))
  };

  const openModal = () => {
    dispatch(changeLabelName('Nombre de la Categoria'))
    dispatch(changeOpenModal(true))
    dispatch(changeTitleModal('Agregar Categoria'))
    dispatch(changeFormType('formCategories'))
    dispatch(changeModalType('post'))
    setEndPoint("/categories/");
  };
  const openModalEdit = (id) => {
    dispatch(loadEditData("/categories/" + id))
    dispatch(changeOpenModal(true))
    dispatch(changeTitleModal('Editar Categoria'))
    dispatch(changeFormType('formCategories'))
    dispatch(changeModalType('put'))
    setEndPoint("/categories/" + id);
  };

  useEffect(() => {
    LoadData();
  }, [actualizar, router]);

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
      render: (data, record) => (
        <Link href={`/admin/categories/${record.id}`}>{data}</Link>
      ),
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          endPoint={'/categories/'}
          titlePopConfirm="la Categoria"
          id={record.id}
          functionEdit={()=>openModalEdit(record.id)}
        />
      ),
      width: 200,
    },
  ];
  return (
    <>
      <TitleAndAccion
        title={"Categorias"}
        accion={openModal}
        textButton={"Agregar Categoria"}
      />
      <ModalForm endPoint={endPoint} />
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default Categorie;
