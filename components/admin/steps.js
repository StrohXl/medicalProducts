import React, { useState, useEffect } from "react";
import {
  Button,
  message,
  Steps,
  theme,
  Form,
  Table,
  Input,
  InputNumber,
} from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  changeformDateCategory,
  changeformDateDescription,
  changeformDateName,
  changeformDateStock,
  changeformDatePrice,
} from "<negocio>/src/app/features/Data/formData";

const StepsProducts = () => {
  const { token } = theme.useToken();

  // Selectores
  const editData = useSelector((state) => state.edit);
  const formType = useSelector((state) => state.extra.formType);
  const dataExtra = useSelector((state) => state.extra);

  // Variables de estado
  const [dataTable, setDataTable] = useState([]);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const contentStyle = {
    color: token.colorTextTertiary,
    marginTop: 16,
  };

  // Funciones
  const onValuesChange = (value, allValues) => {
    dispatch(changeformDateName(allValues.name));
    dispatch(changeformDateDescription(allValues.description));
    dispatch(changeformDateStock(allValues.stock));
    dispatch(changeformDatePrice(allValues.price));
    setData(allValues);
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const loadData = async () => {
    const { data } = await axios.get("http://localhost:8000/api/categories");
    setDataTable(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  // itemsSteps

  const steps = [
    {
      title: "First",
      content: (
        <Form
          layout="vertical"
          form={form}
          initialValues={data}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="name" label={dataExtra.labelName}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Descripcion del Producto">
            <Input.TextArea />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "Second",
      content: (
        <Form
          layout="vertical"
          form={form}
          initialValues={data}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="stock" label="Productos existentes">
            <InputNumber min={1} max={10000} />
          </Form.Item>
          <Form.Item name="price" label="Precio del Producto">
            <InputNumber min={1} max={10000} />
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "",
      content: (
        <Form.Item label="Seleccione una Imagen">
          <Upload />
        </Form.Item>
      ),
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
        }}
      >
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Regresar
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Siguiente
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Guardar
          </Button>
        )}
      </div>
    </>
  );
};

export default StepsProducts;
