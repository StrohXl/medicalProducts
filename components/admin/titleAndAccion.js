import { Button, Col, Row, Typography } from 'antd';
const {Title} = Typography
import React from 'react';

const titleAndAccion = ({accion, title, textButton}) => {
    return (
        <Row gutter={[20, 20]} justify={"space-between"}>
        <Col span={24}>
          <Title level={3}>{title}</Title>
        </Col>
        <Col span={24}>
          <Button type="primary" onClick={accion}>
            {textButton}
          </Button>
        </Col>
      </Row>
    );
};

export default titleAndAccion;