import { Button, Tooltip, Space, Popconfirm } from "antd";
import { mdiDelete, mdiFileEdit } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changeActualizar } from "<negocio>/src/app/features/Data/dataExtra";
import { Delete } from "../notifications";
const buttonsTable = ({ id, endPoint, titlePopConfirm, functionEdit }) => {
  //VARIABLES DE ESTADO
  const actualizar = useSelector((state) => state.extra.actualizar);
  const dispatch = useDispatch();
  //VARIABLES
  const Url = "http://localhost:8000/api";
  //FUNCIONES

  const Eliminar = async () => {
    try {
      await axios.delete(`${Url}${endPoint}${id}`);
      dispatch(changeActualizar(!actualizar));
      Delete(titlePopConfirm);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Space size={"large"}>
        <Tooltip title="Editar" placement="left">
          <Button
            size="large"
            shape="circle"
            type="text"
            icon={<Icon size={1} path={mdiFileEdit} />}
            onClick={functionEdit}
          />
        </Tooltip>
        <Tooltip title="Eliminar" placement="right">
          <Popconfirm
            title={`Esta seguro de eliminar ${titlePopConfirm}?`}
            onConfirm={() => Eliminar()}
            okText="Eliminar"
            cancelText="Cancelar"
          >
            <Button
              danger
              size="large"
              shape="circle"
              type="text"
              icon={<Icon size={1} path={mdiDelete} />}
            />
          </Popconfirm>
        </Tooltip>
      </Space>
    </>
  );
};

export default buttonsTable;
