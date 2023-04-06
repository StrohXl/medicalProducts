import React from "react";
import { Input } from "antd";
import { ConfigProvider } from "antd";
const { Search } = Input;
const inputSearch = () => {
  const onSearch = (e) => {
    console.log(e);
  };
  return (
    <ConfigProvider
      theme={{
        token:{
          colorPrimary: '#ccc',
          colorIcon: 'red',
        },        
        components: {
          Input: {
            borderRadius: "1rem",
            borderRadiusLG: '1rem'
          },
        },
      }}
    >
      <Search size="middle" placeholder="Buscar medicina" onSearch={onSearch} enterButton />
    </ConfigProvider>
  );
};

export default inputSearch;
