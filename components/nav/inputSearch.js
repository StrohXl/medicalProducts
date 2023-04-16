import React from "react";
import { Input } from "antd";
import { ConfigProvider } from "antd";
import { loadData } from "<negocio>/src/app/features/Data/LoadData";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
const { Search } = Input;
const inputSearch = ({ placeholder, onSearch }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const onChange=(value)=>{
    dispatch(loadData({endPoint: '/products/', search: value.target.value, value: router.query.id? router.query.id: ''}))
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: "1rem",
            borderRadiusLG: "1rem",
          },
        },
      }}
    >
      <Search
        size="middle"
        placeholder={"Buscar..."}
        onChange={onChange}
        enterButton
      />
    </ConfigProvider>
  );
};

export default inputSearch;
