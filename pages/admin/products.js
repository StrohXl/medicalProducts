import { useState, useEffect } from "react";
import ButtonsTable from "<negocio>/components/admin/tables/buttonsTable";
import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import { useSelector, useDispatch } from "react-redux";
import { Table, Avatar, Divider } from "antd";
import { loadData } from "<negocio>/src/app/features/Data/LoadData";
import { loadEditData } from "<negocio>/src/app/features/Data/editData";
import {
  changeOpenModal,
  changeTitleModal,
  changeFormType,
  changeModalType,
  changeEndPoint,
  changeLabelName,
} from "<negocio>/src/app/features/Data/dataExtra";
import ModalForm from "<negocio>/components/admin/modal";

const index = () => {
  // VARIABLES
  const dispatch = useDispatch();
  const datos = useSelector((state) => state.load.value);
  const actualizar = useSelector((state) => state.extra.actualizar);
  const [endPoint, setEndPoint] = useState("");

  // FUNCIONES
  const LoadData = async () => {
    dispatch(changeEndPoint("/products/"));
    dispatch(loadData({ endPoint: "/products/" }));
    dispatch(changeLabelName("Nombre del Producto"));
  };
  const openModal = () => {
    dispatch(changeOpenModal(true));
    dispatch(changeTitleModal("Agregar Producto"));
    dispatch(changeFormType("formProducts"));
    dispatch(changeModalType("post"));
    setEndPoint(`/products/`);
  };
  const openModalEdit = (id) => {
    setEndPoint(`/products/${id}`);
    dispatch(changeOpenModal(true));
    dispatch(changeModalType("put"));
    dispatch(changeTitleModal("Editar Producto"));
    dispatch(changeFormType("formProducts"));
    dispatch(loadEditData(`/products/${id}`));
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
      dataIndex: "precio",
    },
    {
      title: "Acciones",
      render: (data, record) => (
        <ButtonsTable
          id={record.id}
          endPoint={"/products/"}
          titlePopConfirm={"este Producto?"}
          functionEdit={() => openModalEdit(record.id)}
        />
      ),
    },
  ];
  return (
    <>
      <TitleAndAccion
        title="Productos"
        accion={openModal}
        textButton={"Agregar Producto"}
        showInputSearch={true}
      />
      <Divider />
      <Table dataSource={datos} columns={columns} />
      <ModalForm endPoint={endPoint} />
    </>
  );
};

export default index;
