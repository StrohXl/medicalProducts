import React from 'react';
import { Drawer } from 'antd';
import Menu from './menu';
const drawer = ({open, onClose}) => {
  return (
    <Drawer width={300} bodyStyle={{padding: 0}} title='' placement='right' onClose={onClose} open={open}>
            <Menu mode={'inline'} CloseDrawer={onClose} />
    </Drawer>  
  );
};

export default drawer;
