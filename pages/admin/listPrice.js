import TitleAndAccion from "<negocio>/components/admin/titleAndAccion";
import ModalGlobal from "<negocio>/components/admin/modal";
import { useDispatch } from "react-redux";
import {
  changeOpenModal,
  changeFormType,
  changeModalType,
  changeTitleModal,
  changeLabelName
} from "<negocio>/src/app/features/Data/dataExtra";
const listPrice = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(changeOpenModal(true));
    dispatch(changeModalType('post'))
    dispatch(changeFormType('formPrice'))
    dispatch(changeTitleModal('Agregar Precio'))
  };
  return (
    <>
      <TitleAndAccion
        title={"Precios"}
        textButton={"Agregar precio al producto"}
        accion={() => openModal()}
      />
      <ModalGlobal endPoint={'/products/price'} />
    </>
  );
};

export default listPrice;
