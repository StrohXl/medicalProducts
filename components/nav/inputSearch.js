import React from "react";
import { Input } from "antd";
import { ConfigProvider } from "antd";
const { Search } = Input;
const inputSearch = ({placeholder, onSearch}) => {

  return (
    <ConfigProvider
      theme={{      
        components: {
          Input: {
            borderRadius: "1rem",
            borderRadiusLG: '1rem'
          },
        },
      }}
    >
      <Search size="middle" placeholder={placeholder} onChange={onSearch} enterButton />
    </ConfigProvider>
  );
};

export default inputSearch;
