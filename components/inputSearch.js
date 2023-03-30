import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
const inputSearch = () => {
    const onSearch =(e)=>{
        console.log(e)
    }
    return <Search style={{width: '500px', marginLeft: '3rem'}} placeholder="input search text" onSearch={onSearch} enterButton />
    ;
};

export default inputSearch;