import { Popconfirm } from "antd";
import axios from "axios";
import { Button, Steps, theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSteps } from "<negocio>/src/app/features/Data/dateSteps";
import {
  changeOpenModal,
  changeActualizar,
} from "<negocio>/src/app/features/Data/dataExtra";
const steps = () => {
  const { token } = theme.useToken();
  const datosSteps = useSelector((state) => state.steps);
  const current = useSelector((state) => state.steps.currentSteps);
  const productImg = useSelector((state) => state.extra.formImg);
  const actualizar = useSelector((state) => state.extra.actualizar);
  const dispatch = useDispatch();
  const steps = datosSteps.steps;
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    color: token.colorTextTertiary,
    marginTop: "2rem",
  };
  const Guardar = async () => {
    const formData = new FormData();
    formData.set("name", datosSteps.paso1);
    formData.set("description", datosSteps.paso2);
    formData.set("stock", datosSteps.paso3);
    formData.set("category", datosSteps.paso4);
    formData.set("productImage", productImg);
    await axios.post("http://localhost:8000/api/products/", formData);
    dispatch(changeOpenModal(false));
    dispatch(changeActualizar(!actualizar));
  };

  const next = () => {
    dispatch(changeCurrentSteps(current + 1));
  };

  const prev = () => {
    dispatch(changeCurrentSteps(current - 1));
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          gap: 100,
          justifyContent: "center",
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Atras
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => Guardar()}
            disabled={datosSteps.paso4 == "" ? true : false}
          >
            Guardar
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            disabled={
              current == 0
                ? datosSteps.paso1 == "" || datosSteps.paso2 == ""
                  ? true
                  : false
                : current == 1
                ? datosSteps.paso3 == "" || datosSteps.uploadImg == ""
                  ? true
                  : false
                : current == 2
                ? datosSteps.paso4 == ""
                  ? true
                  : false
                : ""
            }
          >
            Siguiente
          </Button>
        )}
      </div>
    </>
  );
};

export default steps;
