import Steps from "<negocio>/components/admin/steps";
import { Divider } from "antd";
import { Form, Input, Table, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Create } from "<negocio>/components/admin/notifications";
const { Title } = Typography;
const columns = [
  {
    dataIndex: "id",
    width: 50,
    key: "id",
  },
  {
    key: "name",
    title: "Nombre de la Categoria",
    dataIndex: "name",
  },
];
const CreateSubCategorie = () => {
  // RUTAS
  const url = "http://localhost:8000/api";
  const endPoint = "/categories/";
  const endPointGet = "/categories";
  // VARIABLES DE ESTADO
  const router = useRouter();
  const id = router.query.id;
  const [selectRows, setSelectRows] = useState("");
  const [data, setData] = useState([]);
  const [dataForm, setDataForm] = useState("");
  const [form] = Form.useForm();
  // FUNCIONES
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectRows(selectedRows[0]);
    },
  };
  const Guardar = async () => {
    const dataJson = { ...dataForm, category: selectRows.id };
    try {
      await axios.put(`${url}/sub_categories/${id}`, dataJson);
      router.push("/admin/subCategorias");
      Create("la Sub Categoria");
    } catch (error) {
      console.log(error);
    }
    console.log({ ...dataForm, category: selectRows.id });
  };
  const LoadData = async () => {
    try {
      if (router.query.id) {
        const { data } = await axios.get(`${url}/sub_categories/${id}`);
        const name = { name: data.name }
        form.resetFields();
        form.defaultValue(name)
      }
      const { data } = await axios.get(`${url}${endPointGet}`);
      data.map((i) => (i.key = i.id));
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  const datos = [
    {
      title: "First",
      content: (
        <>
          <Form
            form={form}
            initialValues={{...dataForm}}
            style={{ width: "400px" }}
            layout="vertical"
            onValuesChange={(i) => {
              setDataForm(i), console.log(i);
            }}
          >
            <FormItem
              name="name"
              label={<Title level={3}>Nombre de la Sub Categoria:</Title>}
            >
              <Input size="large" placeholder="Sub Categoria" />
            </FormItem>
          </Form>
        </>
      ),
    },
    {
      title: "Second",
      content: (
        <div>
          <Title level={3}>Seleccione la Categoria:</Title>
          <Table
            columns={columns}
            dataSource={data}
            rowSelection={{ type: "radio", ...rowSelection }}
          />
        </div>
      ),
    },
    {
      title: "Last",
      content: (
        <>
          <Title level={3}>Nombre:</Title>
          <Title level={4}>{dataForm.name}</Title>
          <Divider />
          <Title level={3}>Categoria seleccionada:</Title>
          <Title level={4}>{selectRows.name}</Title>
        </>
      ),
    },
  ];
  return (
    <>
      <Steps
        steps={datos}
        Guardar={Guardar}
        paso1={dataForm}
        paso2={selectRows}
      />
    </>
  );
};
export default CreateSubCategorie;
