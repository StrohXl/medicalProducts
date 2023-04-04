import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const card5 = ({i}) => {

  return (
    <div>
      <Card
        hoverable
        style={{
          width: "100%",
        }}
        cover={
          <img
            alt="example"
            style={{height: '300px', borderBottom: '1px solid #eee'}}
            src={i.img == ''? 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png': i.img}
          />
        }
      >
        <Meta title={i.title.toUpperCase()} />
      </Card>
    </div>
  );
};

export default card5;
