import { useState, useEffect } from "react";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import UploadImg from "<negocio>/components/admin/forms/upload";
import {
  Table,
  Avatar,
  Divider,
  Typography,
  Input,
  Space,
  InputNumber,
} from "antd";
import { loadData } from "<negocio>/src/app/features/Data/Data";
import {
  changePaso1,
  changePaso2,
  changePaso3,
  changePaso4,
  changeSteps,
} from "<negocio>/src/app/features/Data/dateSteps";
import {
  changeOpenModal,
  changeTitleModal,
  changeFormType,
} from "<negocio>/src/app/features/Data/dataExtra";
import { changeStepsDefault } from "<negocio>/src/app/features/Data/dateSteps";
import ModalFormProducts from "<negocio>/components/admin/modalFormProducts";
const { Title } = Typography;

const index = () => {
  // VARIABLES
  const dispatch = useDispatch();
  const datos = useSelector((state) => state.load.value);
  const datosSteps = useSelector((state) => state.steps);
  const actualizar = useSelector((state) => state.extra.actualizar);
  const [auxData, setAuxData] = useState([]);
  const endPoint = "/products/";

  // VARIABLES DE ESTADO

  // FUNCIONES

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      dispatch(changePaso4(selectedRows[0].id));
    },
  };

  const loadDataExtra = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/categories/`);
    data.map((i) => (i.key = i.id));
    setAuxData(data);
  };
  const ChangeSteps = () => {
    dispatch(
      changeSteps({
        contentFirst: (
          <Space direction="vertical" size="large">
            <div>
              <Title level={5}>Nombre del Producto:</Title>
              <Input
                size="large"
                onChange={(e) => dispatch(changePaso1(e.target.value))}
                defaultValue={datosSteps.paso1 == ''? '': datosSteps.paso1}
              />
            </div>
            <div>
              <Title level={5}>Descripcion del Producto:</Title>
              <Input.TextArea
                defaultValue={datosSteps.paso2 == ''? '': datosSteps.paso2}
                onChange={(e) => dispatch(changePaso2(e.target.value))}
              />
            </div>
          </Space>
        ),
        second: {
          title: "Second",
          content: (
            <Space direction="vertical" size="large">
              <div>
                <Title level={5}>Productos Existentes:</Title>
                <InputNumber
                  min={1}
                  max={1000}
                  size="large"
                  onChange={(e) => dispatch(changePaso3(e))}
                />
              </div>
              <div>
                <Title level={4}>Escoja una imagen para el Producto:</Title>
                <UploadImg />
              </div>
            </Space>
          ),
        },
        thirst: {
          title: "Thirst",
          content: (
            <Table
              dataSource={auxData}
              columns={[
                {
                  key: "name",
                  title: "Nombre de la Categoria",
                  dataIndex: "name",
                },
              ]}
              rowSelection={{ type: "radio", ...rowSelection }}
            />
          ),
        },
      })
    );
  };
  const onSearch = async (value) => {
    dispatch(loadData({ endPoint: endPoint, search: value.target.value }));
  };

  const LoadData = async () => {
    dispatch(loadData({ endPoint: endPoint }));
    loadDataExtra();
  };

  const openModal = () => {
    dispatch(changeOpenModal(true));
    dispatch(changeStepsDefault());
    dispatch(changeTitleModal("Agregar Producto"));
    dispatch(changeFormType("createProduct"));
    ChangeSteps();
  };

  useEffect(() => LoadData, [actualizar]);

  // COLUMNAS DE LA TABLA
  const columns = [
    {
      key: "avatar",
      title: "",
      dataIndex: "productImage",
      width: 100,
      render: (data, record) => (
        <Avatar src={`http://localhost:8000${data}`} size={60} />
      ),
    },
    {
      key: "name",
      title: "Nombre del Producto",
      dataIndex: "name",
    },
    {
      key: "description",
      title: "Descripcion del Producto",
      dataIndex: "description",
    },
    {
      key: "stock",
      title: "Existentes",
      dataIndex: "stock",
    },
    {
      key: "price",
      title: "Precio del Producto",
      dataIndex: "price",
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          id={record.id}
          endPoint={endPoint}
          titlePopConfirm={"este Producto?"}
          titleModal={"Editar Producto"}
        />
      ),
    },
  ];
  return (
    <>
      <TitleAndAccion
        title="Productos"
        accion={() => openModal()}
        textButton={"Agregar Producto"}
        showInputSearch={true}
        onSearch={onSearch}
      />
      <Divider />
      <Table dataSource={datos} columns={columns} />
      <ModalFormProducts />
    </>
  );
};

export default index;
