import { Form, Input, InputNumber, Space, Select } from "antd";
import Upload from "./upload";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import {
  changeformDateCategory,
  changeformDateDescription,
  changeformDateName,
  changeformDateStock,
  changeformDatePrice,
  changeformDateProductImage,
} from "<negocio>/src/app/features/Data/formData";
import { useDispatch } from "react-redux";
const formProducts = () => {
  // SELECTORES
  const editData = useSelector((state) => state.edit);
  const formType = useSelector((state) => state.extra.formType);
  const dataExtra = useSelector((state) => state.extra);
  // VARIABLES DE ESTADO
  const router = useRouter();
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [options, setOptions] = useState([]);

  // FUNCIONES
  const dispatch = useDispatch();
  const onValuesChange = (value, allValues) => {
    dispatch(changeformDateName(allValues.name));
    dispatch(changeformDateDescription(allValues.description));
    dispatch(changeformDateStock(allValues.stock));
    dispatch(changeformDatePrice(allValues.price));
    router.query.id ? "" : dispatch(changeformDateCategory(allValues.category));
    setData(allValues);
  };
  const loadDataTable = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/${
        formType == "formPrice" ? "products" : "categories"
      }`
    );
    data.map((i) => {
      (i.label = i.name), (i.value = i.id);
    });
    setOptions(data);
    const idCategory = data.find(
      (value) => value.name == editData.value.category
    );
    if (dataExtra.openModal == true) {
      if (dataExtra.modalType == "post") {
        form.resetFields();
        setData("");
        router.query.id ? "" : dispatch(changeformDateCategory(undefined));
        dispatch(changeformDateName(undefined));
        dispatch(changeformDateDescription(undefined));
        dispatch(changeformDateStock(undefined));
        dispatch(changeformDatePrice(undefined));
        dispatch(changeformDateProductImage(undefined));
      } else {
        console.log(editData.value)
        dispatch(changeformDateName(editData.value.name));
        dispatch(changeformDateDescription(editData.value.description));
        dispatch(changeformDateStock(editData.value.stock));
        editData.value.precio == null
          ? dispatch(changeformDatePrice(editData.value.precio))
          : dispatch(changeformDatePrice(editData.value.precio.price));
        dispatch(changeformDateProductImage("nada"));
        formType == "formSubCategory"
          ? dispatch(changeformDateCategory(editData.value.category))
          : dispatch(changeformDateCategory(idCategory?.id));
        editData.value.precio == null
          ? ""
          : form.setFieldValue("price", editData.value.precio.price);
        form.setFieldsValue({ ...editData.value });
        router.asPath.includes('produc')?
        form.setFieldValue('category', idCategory?.id):
        ''
        setData({ ...editData.value });
      }
    } else {
      form.resetFields();
      setData("");
    }
  };
  useEffect(() => {
    loadDataTable();
  }, [editData, dataExtra, formType]);
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={data}
      onValuesChange={onValuesChange}
      className={
        formType == ("formCategories" || "formSubCategory") ? "" : "formGlobal"
      }
    >
      <div>
        <Space
          direction={
            formType == ("formProducts" || "formProductsCategory")
              ? "horizontal"
              : "vertical"
          }
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          <Form.Item name="name" label={dataExtra.labelName}>
            <Input />
          </Form.Item>
          {formType == "formCategories" ||
          formType == "formProductsCategory" ? (
            ""
          ) : (
            <Form.Item label="Seleccione una Categoria" name="category">
              <Select options={options} />
            </Form.Item>
          )}
        </Space>
      </div>
      {formType == "formProducts" || formType == "formProductsCategory" ? (
        <div>
          <Space style={{ width: "100%", justifyContent: "space-between" }}>
            <Form.Item name="stock" label="Productos existentes">
              <InputNumber  min={1} max={10000} />
            </Form.Item>
            <Form.Item name="price" label="Precio del Producto">
              <InputNumber addonBefore='S/.' min={1} max={10000} />
            </Form.Item>
          </Space>
        </div>
      ) : (
        ""
      )}

      {formType == "formProducts" || formType == "formProductsCategory" ? (
        <div>
          <Space
            align="start"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <Form.Item label="Seleccione una Imagen">
              <Upload />
            </Form.Item>
            <>
              <Form.Item name="description" label="Descripcion del Producto">
                <Input.TextArea />
              </Form.Item>
            </>
          </Space>
        </div>
      ) : (
        ""
      )}
    </Form>
  );
};

export default formProducts;
