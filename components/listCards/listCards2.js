import { Col, Row } from "antd";
import React from "react";
import Card2 from "../cards/card2";
import Card3 from "../cards/card3";
const listCard2 = ({ data, xsprops, mdprops, lgprops, xlprops, alturaprop }) => {
    let altura = '250px'
    let xs = 6
    let md = 8
    let lg = 24
    let xl = 4
  return (
    <Row gutter={[20]}  >
      {data.map((i, index) => {
        index == 0?
        xl = 8:
        index == 1?
        xl = 4:
        index == 3?
        xl = 8:
        index == 4?
        xl = 12:
        index == 7?
        xl = 6: 
        index == 8?
        xl = 6: 
        index == 9?
        (xl = 24, altura = '200px'):
        ''
        if(xl == 4 || xl == 6){
          return(
        
        <Col key={i.id} xs={xs} md={md} lg={lg} xl={xl}>
          <Card2 i={i}/>
       </Col>

          )
        }
        else{
          return(
          <Col key={i.id} xs={xs} md={md} lg={lg} xl={xl}>
            <Card3 i={i} altura={altura}/>
          </Col>
          )
        }
        
      })}
    </Row>
  );
};

export default listCard2;
