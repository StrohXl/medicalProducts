import React from "react";
import { Input } from "antd";
const { Search } = Input;
const inputSearch = () => {
  const onSearch = (e) => {
    console.log(e);
  };
  return (
    <Search
      
      placeholder="Buscar medicina"
      onSearch={onSearch}
      enterButton
    />
  );
};

export default inputSearch;
