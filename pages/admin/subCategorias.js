import Tabla from "<negocio>/components/admin/tables/table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import FormItem from "antd/es/form/FormItem";
import { Input, Table } from "antd";
import { Divider } from "antd";

const SubCategories = () => {
  // RUTAS
  const url = "http://localhost:8000/api";
  const endPoint = "/categories/";
  const endPointGet = "/categories";

  // VARIABLES DE ESTADO
  const [data, setData] = useState([]);
  const [actualizar, setActualizar] = useState(false);
  const [openTour, setOpenTour] = useState(false);

  // FUNCIONES
  const LoadData = async () => {
    const { data } = await axios.get(`${url}${endPointGet}`);
    setData(data);
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
      title: "Nombre de la SubCategoria",
      dataIndex: "name",
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          endPoint={endPoint}
          titlePopConfirm="la SubCategoria"
          id={record}
          Actualizar={() => setActualizar(!actualizar)}
          titleModal="Editar SubCategoria"
        />
      ),
      width: 200,
    },
  ];
const onChange =(e)=>{
  console.log(e)
}
  const steps =[
    {
      title: 'Paso 1:',
      description: 'Agrege el nombre de la sub categoria',
      cover: (
        <FormItem name={'name'} rules={[
          {
            required: true,
            message: "Agregre un nombre ",
          },
        ]}>
          <Input placeholder="Nombre..." onChange={onChange} />
        </FormItem>
      ),
    },
    {
      title: 'Paso 2:',
      description: 'Agrege la categoria ',
      cover: (
        <FormItem name={'id'} rules={[
          {
            required: true,
            message: "Agregre la categoria ",
          },
        ]}>
          <Input placeholder="Nombre..." onChange={onChange} />
        </FormItem>
      ),
    },
  ]
  return (
    <>
      <Tabla
        data={data}
        columns={columns}
        endPoint={endPoint}
        endPointGet={endPointGet}
        Actualizar={() => setActualizar(!actualizar)}
        title="SubCategorias"
        titleModal="Agregar SubCategorias"
        titlePopConfirm="la SubCategorias"
      />
        <Divider />
       <Table columns={columns} dataSource={data} />
    </>
  );
};
export default SubCategories;
