import React from "react";
import { Input } from "antd";
const { Search } = Input;
const inputSearch = () => {
  const onSearch = (e) => {
    console.log(e);
  };
  return (
    <Search
      style={{ width: "500px", marginLeft: "3rem", paddingBottom: "5px" }}
      placeholder="Buscar medicina"
      onSearch={onSearch}
      enterButton
    />
  );
};

export default inputSearch;
