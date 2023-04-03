import React from 'react';
import { Typography, ConfigProvider } from 'antd';
const {Title} = Typography
const card3 = ({i, altura}) => {
    return (
        <card
        style={{
          borderRadius: "4px",
          height: altura,
        }}
      >
        <img src={i.img} style={{ width: "100%", height: altura, borderRadius: "4px", }} />
        {i.title == ''? '':
        
        
        <div
          style={{
            position: "absolute",
            left: "2rem",
            bottom: "2rem",
            width: "40%",
            borderRadius: "4px",
            border: "1px solid #eee9",
            background: "#fff",
            height: "40%",
            padding: '1rem'
          }}
        >
          <ConfigProvider
          theme={{
              token: {
                  colorText: '#000'
              }
          }}
          >
          <Title level={5}>{i.title}</Title>
          </ConfigProvider>
        </div>
        }
      </card>
    );
};

export default card3;