import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import { Table } from "antd";
import { Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "<negocio>/src/app/features/Data/Data"
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
const Categorie = () => {
  // RUTAS
  const endPoint = "/sub_categories/";

  // VARIABLES DE ESTADO
  const [actualizar, setActualizar] = useState(false);
  const data = useSelector((state)=> state.load.value)
  const dispatch = useDispatch()
  // FUNCIONES
  const LoadData=()=>{
    dispatch(loadData({endPoint: endPoint}))
  }
  useEffect(() => {
    LoadData()
  }, [actualizar]);

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
          titleModal='Editar Categoria'
          titlePopConfirm="la Sub Categoria"
          id={record.id}
          Actualizar={() => setActualizar(!actualizar)}
          subCategorie={true}
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
        accion={()=>router.push('/admin/subCategorias/createSubCategorie')}
        textButton={"Agregar nueva Sub Categoria"}
      />
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default Categorie;
