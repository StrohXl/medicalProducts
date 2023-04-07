import { useEffect, useState } from "react";
import { Modal, Form } from "antd";
import FormCategorie from "../forms/formCategorie";
import axios from "axios";
const modal = ({ isModalOpen, handleOk, handleCancel, title, data }) => {
  const [form] = Form.useForm();
  const Url = "http://localhost:8000/api";
  const EndPoint = "/categories/";
  const Guardar = async (values) => {
    if (data == null) {
      try {
        await axios.post(`${Url}${EndPoint}`, values);
        handleOk();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.put(`${Url}${EndPoint}${data.id}`, values);
      } catch (error) {
        console.log(error);
      }
    }
    handleOk();
  };
  const onOk = async () => {
    form.validateFields().then((values) => {
      Guardar(values);
    });
  };
  useEffect(() => {
    if (isModalOpen) {
      if (data == null) {
        form.resetFields();
      } else {
        console.log(data);
        form.resetFields();
        form.setFieldValue(data);
      }
    }
  }, [isModalOpen]);
  return (
    <Modal title={title} open={isModalOpen} onOk={onOk} onCancel={handleCancel}>
      <FormCategorie data={{ ...data }} form={form} />
    </Modal>
  );
};

export default modal;
