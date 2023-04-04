import React from 'react';
import { ConfigProvider, Typography, theme } from 'antd';
const {Title, Paragraph} = Typography
const card2 = ({i}) => {
  const {token} = theme.useToken()
    return (
        <div
        style={{
          border: "1px solid #eee",
          background: "#fff",
          borderRadius: "4px",
          height: "225px",
          padding: "1rem 1rem",
        }}
      >
        <img src={i.img} style={{ height: "125px", width: "100%"}} />
        <Title level={5} style={{textAlign: 'center', width: '100%'}}>{i.title}</Title>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#ad4bcd",
        
            },
          }}
        >
       <ConfigProvider theme={{token:{colorText: token.colorSecondary}}}>
           <Paragraph >
            En Oferta
           </Paragraph>
       </ConfigProvider >
        
        </ConfigProvider>
      </div>
    );
};

export default card2;