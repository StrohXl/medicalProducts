import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  changeOpenModal,
  changeActualizar,
} from "<negocio>/src/app/features/Data/dataExtra";
import { useRouter } from "next/router";
import axios from "axios";
import { Error, Completado } from "./notifications";
import FormGlobal from "./forms/formGlobal";
const ModalGlobal = ({ endPoint }) => {
  // VARIABLES
  const router = useRouter();
  const url = "http://localhost:8000/api";
  const dispatch = useDispatch();

  // SELECTORES
  const actualizar = useSelector((state) => state.extra.actualizar);
  const datos = useSelector((state) => state.extra);
  const auxData = useSelector((state) => state.form);
  const modalType = useSelector((state) => state.extra.modalType);
  const messageNotification = useSelector(state=>state.extra.messageNotification)
  // FUNCIONES

  const onOk = async () => {
    try {
      if (datos.formType == "formCategories") {
        modalType == "post"
          ? await axios.post(url + endPoint, { name: auxData.name })
          : await axios.put(url + endPoint, { name: auxData.name });
      }
      if (datos.formType == "formSubCategory") {
        const elementCategory = {
          name: auxData.name,
          category: auxData.category,
        };
        modalType == "post"
          ? await axios.post(url + endPoint, elementCategory)
          : await axios.put(url + endPoint, elementCategory);
      }
      if (datos.formType == "formPrice") {
        const elementPrice = {
          price: auxData.price,
          producto: auxData.category,
        };
        modalType == "post"
          ? await axios.post(url + endPoint, elementPrice)
          : await axios.put(url + endPoint, elementPrice);
      }

      if (
        datos.formType == "formProducts" ||
        datos.formType == "formProductsCategory"
      ) {
        const formData = new FormData();
        formData.set("name", auxData.name);
        formData.set("description", auxData.description);
        formData.set("stock", auxData.stock);
        formData.set(
          "category",
          router.query.id ? router.query.id : auxData.category
        );

        modalType == "post"
          ? (formData.set("productImage", auxData.productImage),
            await axios.post(url + endPoint, formData))
          : auxData.productImage == "nada"
          ? await axios.put(url + endPoint, formData)
          : (formData.set("productImage", auxData.productImage),
            await axios.put(url + endPoint, formData));
      }
      dispatch(changeOpenModal(false));
      dispatch(changeActualizar(!actualizar));
      Completado(`${modalType}`,`${messageNotification}`)
    } catch (error) {
      error.response.status == 400?
      Error('El nombre debe de ser unico'):
      Error('Error')
      console.log(error);
    }


  };

  return (
    <Modal
      centered
      title={datos.titleModal}
      open={datos.openModal}
      onOk={onOk}
      onCancel={() => dispatch(changeOpenModal(false))}
      width={datos.formType == "formProducts" ? 700 : 500}
    >
      <FormGlobal />
    </Modal>
  );
};

export default ModalGlobal;
