import React from 'react';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import { medi } from '<negocio>/components/items/medi';
import Card1 from '<negocio>/components/cards/card1';
const {Title} = Typography
const index = () => {
    const router =  useRouter()
    console.log(router)
    return (
        <div className='margin'> 
            <Title>
               {router.query.id}
            </Title>
            <Card1 data={medi}/>
        </div>
    );
};

export default index;