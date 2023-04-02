import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  ConfigProvider,
  notification,
  theme
} from "antd";

const formContact = () => {
  const openNotification = () => {
    notification.success({
      message: "Felicitaciones",
      description:
        "Se ha enviado el mensaje exictosamente, seras atendido por nuestros trabajadores en menos de 24horas",
    });
  };

  const {token} = theme.useToken()
 
  const onFinish = (e) => {
    openNotification();
    console.log(e);
  };



  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Input: {
            borderRadiusLG: "0",
          },
        },
      }}
    >
      <Form
        name="control-ref"
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={[20, 20]}>
          <Col xl={12}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Porfavor escriba su Nombre!" },
              ]}
            >
              <Input
                style={{
                  border: "0",
                  borderBottom: "1px solid #ccc",
                  boxShadow: "none",
                }}
                size="large"
                placeholder="Nombre"
              />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item
              name="secondname"
              rules={[
                { required: true, message: "Porfavor escriba su Apellido!" },
              ]}
            >
              <Input
                style={{
                  border: "0",
                  borderBottom: "1px solid #ccc",
                  boxShadow: "none",
                }}
                size="large"
                placeholder="Apellido"
              />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Porfavor escriba su correo!",
                },
              ]}
            >
              <Input
                style={{
                  border: "0",
                  borderBottom: "1px solid #ccc",
                  boxShadow: "none",
                }}
                size="large"
                placeholder="Correo Electronico"
              />
            </Form.Item>
          </Col>
          <Col xl={12}>
            <Form.Item
              name="tlf"
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Porfavor escriba su Numero de telefono!",
                },
              ]}
            >
              <Input
                style={{
                  border: "0",
                  borderBottom: "1px solid #ccc",
                  boxShadow: "none",
                }}
                size="large"
                placeholder="Numero de Telefono"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item style={{ marginTop: "9rem" }}>   
        <ConfigProvider theme={{token:{colorPrimary: token.colorSecondary}}}>

           <Button
            
             size="large"
             type="primary"
             htmlType="submit"
             style={{ width: "200px"}}
             >
             Enviar Mensaje
           </Button>
               </ConfigProvider>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default formContact;
