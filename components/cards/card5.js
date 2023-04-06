import React from "react";
import { Card, Col, Row } from "antd";
import Link from "next/link";
const { Meta } = Card;
const card5 = ({ data }) => {
  return (
    <Row gutter={[20, 20]} >
      {data.map((i, index) =>(
            <Col xs={12} md={8} lg={6} xl={6}>
          <Link href={`/medicamentos/${i.title}`}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={
                <img
                  alt="example"
                  style={{ height: "250px", borderBottom: "1px solid #eee" }}
                  src={
                    i.img == ""
                      ? "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      : i.img
                  }
                />
              }
            >
              <Meta title={i.title.toUpperCase()} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default card5;
