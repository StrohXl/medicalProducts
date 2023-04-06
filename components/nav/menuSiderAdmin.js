import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
const menuSiderAdmin = () => {
    const items =[
        {
            label: 'Medicamentos',
            icon: <UserOutlined/>,
            key: '/admin/medicamentos'
        },
        {

            label: 'Ofertas de la semana',
            icon: <UserOutlined/>,
            key: '/admin/ofertasDeLaSemana'
        },
        {
  
            label: 'Bebes',
            icon: <UserOutlined/>,
            key: '/admin/bebes'
        },
        {
       
            label: 'Salud',
            icon: <UserOutlined/>,
            key: '/admin/salud'
        },
        {

            label: 'Informacion',
            icon: <UserOutlined/>,
            key: '/admin/informacion'
        },
    ]
    const router = useRouter()
    return (
        <Menu
        mode="inline"
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={items}
        onClick={({ key})=>router.push(key)}
      />
    );
};

export default menuSiderAdmin;