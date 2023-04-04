import { Col, Row } from "antd";
import React from "react";
import Card2 from "../cards/card2";
import Card4 from "../cards/card4";
import Card3 from "../cards/card3";
import { Inter, Lora } from "next/font/google";
import Link from "next/link";
import { items } from "./itemsCards2";
const robot = Lora({ weight: "600", style: "normal", subsets: ["latin"] });
const listCard2 = ({ data }) => {
  let altura = "225px";
  let xs = 6;
  let md = 8;
  let lg = 24;
  let xl = 4;
  let titulo = "";
  return (
    <Row gutter={[20, 60]} className={`margin  ${robot.className}`}>
      {items.map((i, index) => {
        index == 0
          ? (xs = 24)
          : index == 1
          ? (xs = 12)
          : index == 3
          ? (xs = 24)
          : index == 4
          ? (xs = 24)
          : index == 7
          ? (xs = 12)
          : index == 9
          ? ((xs = 24), (altura = "200px"))
          : "";
        index == 0
          ? (md = 16)
          : index == 1
          ? (md = 8)
          : index == 3
          ? (md = 16)
          : index == 4
          ? (md = 24)
          : index == 5
          ? (md = 12)
          : index == 6
          ? (md = 12)
          : index == 9
          ? ((md = 12), (altura = "300px"))
          : "";
        index == 0
          ? (lg = 8)
          : index == 4
          ? (lg = 12)
          : index == 7
          ? (lg = 6)
          : index == 8
          ? (lg = 6)
          : index == 9
          ? ((lg = 24), (altura = "200px"))
          : "";
        index == 0
          ? (xl = 8)
          : index == 4
          ? (xl = 12)
          : index == 7
          ? (xl = 6)
          : index == 8
          ? (xl = 6)
          : index == 9
          ? ((xl = 24), (altura = "200px"))
          : "";

          return(
            <div>
              hola
            </div>
          )
 
    
      })}
    </Row>
  );
};

export default listCard2;
