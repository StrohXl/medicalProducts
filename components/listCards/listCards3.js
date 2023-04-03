import { Col, Row } from 'antd';
import React from 'react';
import { medicamentos } from '../medicamentos';
import { Card } from 'antd';
import Link from 'next/link';
const {Meta} = Card
const listCards3 = () => {
    return (
        <Row gutter={[20, 20]}>
            {medicamentos.map((i,index)=>(
                <Col key={index}xs={12} md={8}  xl={6}>
                  <Link href={`/medicamentos/${i.title}`}>
                      <Card
                       hoverable
                       style={{
                          width: '100%',
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    
                      >
                         <Meta title={i.title} />
                      </Card>
                  </Link>
                </Col>
            ))}
        </Row>
    );
};

export default listCards3;