import React from "react";
import { Typography, ConfigProvider } from "antd";
const { Title, Paragraph } = Typography;
const card3 = ({ i, altura }) => {
  return (
    <card
      style={{
        borderRadius: "4px",

      }}
      className="card4"
    >
      <img
        src={i.img}
      
        style={{ width: "100%", height: altura, borderRadius: "4px" }}
      />
      {i.title == "" ? (
        ""
      ) : (
        <div
          style={{
            position: "absolute",
            left: "2rem",
            bottom: "2rem",
            width: "60%",
            borderRadius: "4px",
            border: "1px solid #eee9",
            background: "#fffe",
            height: "40%",
            padding: "1rem",
          }}
        >
          <p style={{ marginBottom: 0, marginTop: ".5rem" }}>
            ENVIO GRATIS
          </p>
          <Title level={5} style={{ marginTop: 0 }}>
            {i.title}
          </Title>
        </div>
      )}
    </card>
  );
};

export default card3;
