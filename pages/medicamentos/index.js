import React from 'react';
import ListCards3 from '<negocio>/components/listCards/listCards3';
import { Typography } from 'antd';
const {Title} = Typography
const medicamentos = () => {
    return (
        <div className='margin'>
            <Title>
                Medicamentos
            </Title>
            <ListCards3/>
        </div>
    );
};

export default medicamentos;