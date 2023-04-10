import { Form, Input, InputNumber } from "antd";
import Upload from "./upload";
import { useEffect, useState } from "react";
const formProducts = ({ form, data, onChange, formData}) => {
    const [imageUrl, setImageUrl] = useState(null);
    const ImageUrl=(url)=>{
      setImageUrl(url)
    }

    useEffect(()=>{data.productImage? setImageUrl(data.productImage): ''},[])
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={data}
      onValuesChange={onChange}
    >
      <Form.Item
        name="name"
        label="Nombre del Producto"
        rules={[{ message: "Escriba el nombre del Producto!!!", required: true }]}
      >
        <Input placeholder="Producto..." />
      </Form.Item>
      <Form.Item
        name="description"
        label="Descripcion del Producto"
        rules={[{ message: "Escriba el nombre del Producto!!!", required: true }]}
      >
        <Input.TextArea  />
      </Form.Item>
      <Form.Item
        name="stock"
        label="Productos existentes"
        rules={[{ message: "Escriba los productos existentes!!!", required: true }]}
      >
        <InputNumber min={1} max={10000}/>
      </Form.Item>
      <Upload formData={formData} imageUrl={imageUrl} ImageUrl={ImageUrl} />
    </Form>
  );
};

export default formProducts;
