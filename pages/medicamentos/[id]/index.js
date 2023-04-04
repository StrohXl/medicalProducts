import React from 'react';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
const {Title} = Typography
import ListCards1 from '<negocio>/components/listCards/listCards1';
const index = () => {
    const router =  useRouter()
    console.log(router)
    return (
        <div className='margin'> 
            <Title>
               {router.query.id}
            </Title>
            <ListCards1/>
        </div>
    );
};

export default index;