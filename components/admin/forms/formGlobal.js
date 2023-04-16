import { Form, Input, InputNumber, Table, Space, Typography } from "antd";
import Upload from "./upload";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const { Paragraph } = Typography;
import {
  changeformDateCategory,
  changeformDateDescription,
  changeformDateName,
  changeformDateStock,
  changeformDatePrice
} from "<negocio>/src/app/features/Data/formData";
import { useDispatch } from "react-redux";
import { Avatar } from "antd";
const formProducts = () => {
  // SELECTORES
  const editData = useSelector((state) => state.edit);
  const formType = useSelector((state) => state.extra.formType);
  const dataExtra = useSelector((state) => state.extra);
  // VARIABLES DE ESTADO
  const [dataTable, setDataTable] = useState([]);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  // FUNCIONES
  const dispatch = useDispatch();
  const rowSelection = {
    onChange: (selectedRows) => {
      dispatch(changeformDateCategory(selectedRows[0]));
    },
  };
  const onValuesChange = (value, allValues) => {
    dispatch(changeformDateName(allValues.name));
    dispatch(changeformDateDescription(allValues.description));
    dispatch(changeformDateStock(allValues.stock));
    dispatch(changeformDatePrice(allValues.price))
    setData(allValues);
  };
  const loadDataTable = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/${
        formType == "formPrice" ? "products" : "categories"
      }`
    );
    data.map((i) => (i.key = i.id));
    setDataTable(data);
    const idCategory = data.find(
      (value) => value.name == editData.value.category
    );
    if (dataExtra.openModal == true) {
      if (dataExtra.modalType == "post") {
        form.resetFields();
        setData("");
      } else {
        dispatch(changeformDateName(editData.value.name));
        dispatch(changeformDateDescription(editData.value.description));
        dispatch(changeformDateStock(editData.value.stock));
        formType == "formSubCategory"
          ? dispatch(changeformDateCategory(editData.value.category))
          : dispatch(changeformDateCategory(idCategory?.id));
        form.setFieldsValue({ ...editData.value });
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
    >
      <Space
        align="start"
        direction={formType == "formSubCategory" || formType == "formPrice" ? "vertical" : "horizontal"}
      >
        <div style={{ width: formType == "formProducts" ? "300px" : "450px" }}>
          {formType == "formPrice" ? (
            <Form.Item label={"Precio del Producto"} name="price">
              <InputNumber style={{width: '50%'}}  min={1}/>
            </Form.Item>
          ) : (
            <Form.Item name="name" label={dataExtra.labelName}>
              <Input />
            </Form.Item>
          )}

          {formType == "formProducts" || formType == "formProductsCategory" ? (
            <>
              <Form.Item name="description" label="Descripcion del Producto">
                <Input.TextArea />
              </Form.Item>
              <Form.Item name="stock" label="Productos existentes">
                <InputNumber min={1} max={10000} />
              </Form.Item>
              <Form.Item label="Seleccione una Imagen">
                <Upload />
              </Form.Item>
            </>
          ) : (
            ""
          )}
        </div>

        {formType == "formProducts" ||
        formType == "formSubCategory" ||
        formType == "formPrice" ? (
          <Form.Item
            label={
              formType == "formPrice"
                ? "Seleccione un Producto"
                : "Seleccione una Categoria"
            }
          >
            {dataExtra.modalType == "post" ? (
              ""
            ) : (
              <Paragraph>{`Categoria Previa: ${editData.value.category}`}</Paragraph>
            )}
            <Table
              style={{ width: formType == "formProducts" ? "300px" : "450px" }}
              dataSource={dataTable}
              columns={[
                formType == "formPrice" ?
                {
                  key: "avatar",
                  title: "",
                  dataIndex: "productImage",
                  width: 100,
                  render: (data, record) => (
                    <Avatar src={`http://localhost:8000${data}`} size={60} />
                  ),
                }
                :
                {},
                { key:'name', title: "Categoria", dataIndex: "name" }
              ]}
              rowSelection={{ type: "radio", ...rowSelection }}
              pagination={{ pageSize: 4 }}
            />
          </Form.Item>
        ) : (
          ""
        )}
      </Space>
    </Form>
  );
};

export default formProducts;
