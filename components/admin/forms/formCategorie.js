import { Form, Input } from "antd";
const formCategorie = ({ form, data, onChange}) => {
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={data}
      onValuesChange={onChange}
    >
      <Form.Item
        name="name"
        label="Nombre de la Categoria"
        rules={[{ message: "Escriba el nombre de la Categoria!!!", required: true }]}
      >
        <Input placeholder="Categoria" />
      </Form.Item>
    </Form>
  );
};

export default formCategorie;
