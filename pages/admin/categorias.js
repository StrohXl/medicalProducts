import React, { useEffect, useState } from "react";
import { Divider, Button, Typography, Row, Col, Tooltip } from "antd";
import Modal from "../../components/admin/modal";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import Table from "../../components/admin/tables/table";
import axios from "axios";
const { Title } = Typography;
const categorias = () => {
  //VARIALBES DE ESTADO
  const [data, setData] = useState([]);
  const [actualizar, setActualizar] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  //VARIABLES
  const Url = "http://localhost:8000/api";
  const columns = [
    {
      dataIndex: "id",
      width: 50,
      key: 'id'
    },
    {
      key: 'name',
      title: "Nombre de la Categoria",
      dataIndex: "name",
    },
    {
      title: "Acciones",
      render: (data, record) => (<ButtonsTable id={record} Actualizar={()=>setActualizar(!actualizar)}/>),
      width: 200,
    },
  ];

  //FUNCIONES
  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const CloseModal = () => {
    setIsModalOpen(false);
    setActualizar(!actualizar)
  };
  const LoadData = async () => {
    const { data } = await axios.get(`${Url}/categories/`);
    setData(data);
  };
  useEffect(() => {
    LoadData();
  }, [actualizar]);
  
  return (
    <>
      <Row gutter={[20, 20]} justify={"space-between"}>
        <Col span={24}>
          <Title level={3}>Categorias</Title>
        </Col>
        <Col span={24}>
          <Button type="primary" onClick={() => OpenModal()}>
            Agregar
          </Button>
        </Col>
      </Row>
      <Modal
        handleCancel={()=>setIsModalOpen(false)}
        handleOk={CloseModal}
        isModalOpen={isModalOpen}
        title={"Crear Categoria"}
        data={null}
      />

      <Divider />
      <Table columns={columns} data={data} />
    </>
  );
};

export default categorias;
