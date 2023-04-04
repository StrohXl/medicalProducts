import { Col, Row } from 'antd';
import React from 'react';
import { medicamentos } from '../medicamentos';
import Card5 from '../cards/card5';
import Link from 'next/link';
const listCards3 = () => {
    return (
        <Row gutter={[20, 20]} >
            {medicamentos.map((i,index)=>(
                <Col key={index}xs={12} md={8}  xl={6}>
                  <Link href={`/medicamentos/${i.title}`}>
                     <Card5 i={i}/>
                  </Link>
                </Col>
            ))}
        </Row>
    );
};

export default listCards3;