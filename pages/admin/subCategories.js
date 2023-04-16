import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import { Table } from "antd";
import { Divider } from "antd";
import {
  changeOpenModal,
  changeTitleModal,
  changeFormType,
  changeModalType,
  changeLabelName,
} from "<negocio>/src/app/features/Data/dataExtra";
import { loadEditData } from "<negocio>/src/app/features/Data/editData";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "<negocio>/src/app/features/Data/LoadData";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import ModalForm from "<negocio>/components/admin/modal";
const Categorie = () => {
  // VARIABLES DE ESTADO
  const [endPoint, setEndPoint] = useState('')
  const data = useSelector((state) => state.load.value);
  const dispatch = useDispatch();


  //SELECTORES
 const actualizar = useSelector(state=>state.extra.actualizar)


  // FUNCIONES
  const LoadData = () => {
    dispatch(changeLabelName('Nombre de la Sub Categoria'))
    dispatch(loadData({ endPoint: '/sub_categories/' }));
  };
  useEffect(() => {
    LoadData();
  }, [actualizar]);

  const openModal = () => {
    dispatch(changeOpenModal(true));
    dispatch(changeTitleModal("Agregar SubCategoria"));
    dispatch(changeFormType("formSubCategory"));
    dispatch(changeModalType("post"));
    setEndPoint(`/sub_categories/`);
  };
  const openModalEdit = (id) => {
    dispatch(changeOpenModal(true));
    dispatch(changeTitleModal("Editar SubCategoria"));
    dispatch(changeFormType("formSubCategory"));
    dispatch(changeModalType("put"));
    dispatch(loadEditData(`/sub_categories/`+id))
    setEndPoint(`/sub_categories/`+id);
  };
  // COLUMNAS DE LA TABLA
  const columns = [
    {
      key: "name",
      title: "Nombre de la Sub Categoria",
      dataIndex: "name",
    },
    {
      key: "id",
      title: "Categoria",
      dataIndex: "id",
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          endPoint={endPoint}
          titlePopConfirm="la Sub Categoria"
          id={record.id}
          functionEdit={() => openModalEdit(record.id)}
        />
      ),
      width: 200,
    },
  ];
  return (
    <>
      <TitleAndAccion
        title={"Sub Categorias"}
        accion={() => openModal()}
        textButton={"Agregar nueva Sub Categoria"}
      />
      <Divider />
      <Table columns={columns} dataSource={data} />
      <ModalForm endPoint={endPoint} />
    </>
  );
};
export default Categorie;
