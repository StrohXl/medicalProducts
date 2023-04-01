import React from 'react';
import { ConfigProvider, Typography } from 'antd';
const {Title} = Typography
const card2 = ({i}) => {
    return (
        <div
        style={{
          border: "1px solid #eee",
          background: "#fff",
          borderRadius: "4px",
          height: "250px",
          padding: "1rem 1rem",
        }}
      >
        <img src={i.img} style={{ height: "125px", width: "100%"}} />
        <Title level={5} style={{textAlign: 'center', width: '100%'}}>{i.title}</Title>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#ad4bcd",
              colorText: '#ad4bcd'
            },
          }}
        >
          <Title color="primary" level={5}>
            BS. {i.price}
          </Title>
        
        </ConfigProvider>
      </div>
    );
};

export default card2;