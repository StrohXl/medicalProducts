import React from 'react';
import { Typography } from 'antd';
import { medicamentos } from '<negocio>/components/items/medicamentos';
import Card5 from '<negocio>/components/cards/card5';
const {Title} = Typography
const TiposDeMedicamentos = () => {
    return (
        <div className='margin'>
            <Title>
                Medicamentos
            </Title>
            <Card5 data={medicamentos} />
        </div>
    );
};

export default TiposDeMedicamentos;