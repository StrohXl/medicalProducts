import { Popconfirm } from "antd";
import { Button, Steps, theme } from "antd";
import { useState } from "react";
const steps = ({ steps, Guardar, paso1, paso2 }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    color: token.colorTextTertiary,
    marginTop: "2rem",
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
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
          <Popconfirm
              title='Estas seguro de Crear esta Sub Categoria?'
              onConfirm={Guardar}
              okText='Guardar'
              cancelText='Cancelar'
          >
          <Button type="primary" >
            Guardar
          </Button>
  
          </Popconfirm>
        )}
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            disabled={
              current == 0
                ? paso1.name == "" || paso1 == ""
                  ? true
                  : false
                : current == 1
                ? paso2 == "" || paso2 == ""
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
