import React, { useState } from "react";
import { Button, Tooltip, Space, Popconfirm } from "antd";
import { mdiDelete, mdiFileEdit } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import ModalForm from "../modal";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  changeActualizar,
  changeOpenModal,
  changeTitleModal,
} from "<negocio>/src/app/features/Data/dataExtra";
import { Delete } from "../notifications";
const buttonsTable = ({
  id,
  endPoint,
  titlePopConfirm,
  titleModal,
  subCategorie,
}) => {
  const router = useRouter();
  //VARIABLES DE ESTADO
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataDefault, setDataDefault] = useState(null);
  const actualizar = useSelector((state) => state.extra.actualizar);
  const dispatch = useDispatch();
  //VARIABLES
  const Url = "http://localhost:8000/api";
  //FUNCIONES
  const CloseModal = () => {
    dispatch(changeActualizar(!actualizar));
    setIsModalOpen(false);
  };
  const Editar = async () => {
    const { data } = await axios.get(`${Url}${endPoint}${id}`);
    setIsModalOpen(true);
    setDataDefault(data);
  };

  const Eliminar = async () => {
    try {
      await axios.delete(`${Url}${endPoint}${id}`);
      dispatch(changeActualizar(!actualizar));
      Delete(titlePopConfirm);
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
            onClick={() => {
              subCategorie
                ? router.push(`/admin/subCategorias/${id}`)
                : dispatch(changeOpenModal(true)),
                dispatch(changeTitleModal(titleModal));
            }}
          />
        </Tooltip>
        <Tooltip title="Eliminar" placement="right">
          <Popconfirm
            title={`Esta seguro de eliminar ${titlePopConfirm}?`}
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
      <ModalForm
        isOpenModal={isModalOpen}
        handleOk={CloseModal}
        handleCancel={() => setIsModalOpen(false)}
        titleModal={titleModal}
        endPoint={endPoint}
        titlePopConfirm={titlePopConfirm}
        value={dataDefault}
        formType="products"
      />
    </>
  );
};

export default buttonsTable;
