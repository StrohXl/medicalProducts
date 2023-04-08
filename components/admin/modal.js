import { useEffect, useState } from "react";
import { Modal, Form } from "antd";
import FormCategorie from "./forms/formCategorie";
import { Create, Edit, Error } from "./notifications";
import axios from "axios";
const modal = ({
  isOpenModal,
  handleOk,
  handleCancel,
  titleModal,
  value,
  endPoint,
  titlePopConfirm,
}) => {
  const [form] = Form.useForm();
  const Url = "http://localhost:8000/api";
  const Guardar = async (values) => {
    if (value == null) {
      try {
        await axios.post(`${Url}${endPoint}`, values);
        handleOk();
        Create(titlePopConfirm);
      } catch (error) {
        error.response.status == 400
          ? Error("El nombre debe de ser unico")
          : console.log(error);
      }
    } else {
      try {
        await axios.put(`${Url}${endPoint}${value.id}`, values);
        Edit(titlePopConfirm);
        handleOk();
      } catch (error) {
        error.response.status == 400
          ? Error("El nombre debe de ser unico")
          : console.log(error);
      }
    }
  };
  const onOk = async () => {
    form.validateFields().then((values) => {
      Guardar(values);
    });
  };
  useEffect(() => {
      if (value == null) {
        form.resetFields();
      } else {
        form.resetFields();
        form.setFieldValue(value);
      }

  }, [isOpenModal]);
  
  return (
    <Modal title={titleModal} open={isOpenModal} onOk={onOk} onCancel={handleCancel}>
      <FormCategorie data={{ ...value }} form={form} />
    </Modal>
  );
};

export default modal;
