import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeOpenModal } from "<negocio>/src/app/features/Data/dataExtra";
import Steps from "<negocio>/components/admin/steps";
import { useEffect, useState} from "react";
const modalFormProducts = () => {
  const datos = useSelector((state) => state.extra);
  const dispatch = useDispatch();
  return (
    <Modal
      title={datos.titleModal}
      open={datos.openModal}
      onOk={()=>dispatch(changeOpenModal(false))}
      onCancel={()=>dispatch(changeOpenModal(false))}
      footer={false}
    >
      {
        datos.formType == 'createProduct'?
        <Steps/>
        :
        ''
      }
    </Modal>
  );
};

export default modalFormProducts;
