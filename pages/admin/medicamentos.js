import { Button } from "antd";
import React from "react";
import Table from "<negocio>/components/tables/table";
import { useState } from "react";
import { Space } from "antd";
import { Avatar } from "antd";
const medicamentos = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      dataIndex: "img",
      width: 100,
      render: (text) => <Avatar src={text} size={60} />,
    },
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Tipo",
      dataIndex: "type",
    },
    {
      title: "Precio",
      dataIndex: "price",
    },
  ];
  return (
    <div>
      <Space size={"large"} direction="vertical" style={{ width: "100%" }}>
        <Button type="primary">Agregar medicamento</Button>
        <Table
          data={[
            {
              name: "Atamel",
              price: 5,
              type: "Eso que te importa",
              img: "https://www.biotech.com.ve/wp-content/uploads/2021/11/Lokarin-F-2.png",
            },
          ]}
          columns={columns}
        />
      </Space>
    </div>
  );
};

export default medicamentos;
