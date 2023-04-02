import { ConfigProvider, theme } from 'antd';
import { Avatar } from 'antd';
import { Row,Col, Typography, Button } from 'antd';
const {Title, Paragraph} = Typography
import React from 'react';

const hero = () => {
    const {token} = theme.useToken()
    return (
        <Row style={{height: 'calc(100vh - 120px)',}}>
        <Col md={24} lg={10} style={{height: '100%'  ,display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection: 'column'}} > 
        <Title level={1} style={{fontSize: '3.5rem'}}>
            Renueve su salud ahora
        </Title>
        <Paragraph>
            Donde sea que estes compra tus medicinas con solo presionar un botom. Ofrecemos los mejores servicios de envio
        </Paragraph>
     <ConfigProvider theme={{token:{colorPrimary: token.colorSecondary}}}>
           <Button type="primary" style={{marginTop: '3rem', width: '150px'}}>
               Comprar
           </Button>
     </ConfigProvider>
        </Col>
        <Col xs={24} md={24} lg={14} style={{height: '100%'  ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
            <Avatar size={350} src={'https://pbs.twimg.com/media/ESgP6u7WoAAZLEy.png'} />
             
        </Col>
        
        </Row>
    );
};

export default hero;