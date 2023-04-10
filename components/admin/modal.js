import { useEffect, useState } from "react";
import { Modal, Form } from "antd";
import FormCategorie from "./forms/formCategorie";
import FormProducts from "./forms/formProducts";
import { Create, Edit, Error } from "./notifications";
import { useRouter } from "next/router";
import axios from "axios";
const modal = ({
  isOpenModal,
  handleOk,
  handleCancel,
  titleModal,
  value,
  endPoint,
  titlePopConfirm,
  formType,
}) => {
  // VARIABLES
  const router = useRouter();
  const id = router.query.id;
  const [form] = Form.useForm();
  const Url = "http://localhost:8000/api";
  const [img, setImg] = useState(null);

  // FUNCIONES
  const Guardar = async (values) => {
    if (value == null) {
      try {
        if (formType == "products") {
          const formData = new FormData();
          formData.set("name", values.name);
          formData.set("description", values.description);
          formData.set("stock", values.stock);
          formData.set("category", id);
          formData.set("productImage", img, img.name);
          await axios.post(`${Url}${endPoint}`, formData);
        }
        if (formType == "categories") {
          await axios.post(`${Url}${endPoint}`, values);
        }
        handleOk();
        Create(titlePopConfirm);
      } catch (error) {
        error.response.status == 400
          ? Error("El nombre debe de ser unico")
          : console.log(error);
      }
    } else {
      try {
        if (formType == "products") {
          const formData = new FormData();
          formData.set("name", values.name);
          formData.set("description", values.description);
          formData.set("stock", values.stock);
          formData.set("category", id);
          formData.set("productImage", img, img.name);
          await axios.put(`${Url}${endPoint}${value.id}`, formData);
        }
        if (formType == "categories") {
          await axios.put(`${Url}${endPoint}${value.id}`, values);
        }
        Edit(titlePopConfirm);
        handleOk();
      } catch (error) {
        Error("El nombre debe de ser unico");
        console.log(error);
      }
    }
  };
  const GuardarImg = (info) => {
    setImg(info.file);
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
      console.log(value.productImage)
      form.resetFields();
      form.setFieldValue(value);
    }
  }, [isOpenModal]);

  return (
    <Modal
      title={titleModal}
      open={isOpenModal}
      onOk={onOk}
      onCancel={handleCancel}
    >
      {formType == "products" ? (
        <FormProducts formData={GuardarImg} data={{ ...value }} form={form} />
      ) : formType == "categories" ? (
        <FormCategorie data={{ ...value }} form={form} />
      ) : (
        ""
      )}
    </Modal>
  );
};

export default modal;
