import { ConfigProvider,Typography, Button, theme } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const {Title} = Typography

const card1 = ({i}) => {
  const router = useRouter()
  console.log(router)
  const {token} = theme.useToken()
  return (
    <div
      style={{
        border: "1px solid #ddd",
        background: "#fff",
        borderRadius: "4px",
        height: "300px",
        padding: "1rem 1rem",
      }}
    >
      <img src={i.img} style={{ height: "150px", width: "100%" }} />
      <Title level={5}>{i.title}</Title>
      <ConfigProvider
        theme={{
          token: {  
          },
        }}
      >
        <Title level={5}>
          BS. {i.price}
        </Title>
     <ConfigProvider theme={{token:{}}}>
         <Link href={`${router.asPath}/${i.title}`}>
          <Button
            size="large"
            type="primary"
            style={{
              width: "100%",
              lineHeight: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <ShoppingCartOutlined />
            Anadir
          </Button>
         </Link>
     </ConfigProvider>
      </ConfigProvider>
    </div>
  );
};

export default card1;
