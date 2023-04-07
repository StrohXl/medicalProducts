import React, { useState } from "react";
import { Button, Tooltip, Space, Popconfirm } from "antd";
import { mdiDelete, mdiFileEdit } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import Modal from "../modals/modal";
const buttonsTable = ({ id, Actualizar }) => {
  //VARIABLES DE ESTADO
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataDefault, setDataDefault] = useState(null);
  //VARIABLES
  const Url = "http://localhost:8000/api";
  //FUNCIONES
  const CloseModal = () => {
    setIsModalOpen(false);
  };
  const Editar = async (id) => {
    const { data } = await axios.get(`${Url}/categories/${id}`);
    setIsModalOpen(true);
    setDataDefault(data);
  };

  const Eliminar = async () => {
    try {
      await axios.delete(`${Url}/categories/${id.id}`);
      Actualizar();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Space size={"large"}>
        <Tooltip title="Editar" placement="left">
          <Button
            size="large"
            shape="circle"
            type="text"
            icon={<Icon size={1} path={mdiFileEdit} />}
            onClick={() => Editar(id.id)}
          />
        </Tooltip>
        <Tooltip title="Eliminar" placement="right">
          <Popconfirm
            title="Esta seguro de eliminar esta Categoria?"
            onConfirm={() => Eliminar()}
            okText="Eliminar"
            cancelText="Cancelar"
          >
            <Button
              danger
              size="large"
              shape="circle"
              type="text"
              icon={<Icon size={1} path={mdiDelete} />}
            />
          </Popconfirm>
        </Tooltip>
      </Space>
      <Modal
        handleCancel={CloseModal}
        isModalOpen={isModalOpen}
        handleOk={CloseModal}
        title={"Editar Categoria"}
        data={dataDefault}
      />
    </>
  );
};

export default buttonsTable;
