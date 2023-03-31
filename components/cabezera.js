import React from 'react';
import Carousel from './carousel'
import Cards from './cards';
const cabezera = () => {
   
    return (
        <>
            <Carousel/>
            <div style={{padding: '2rem 2.5rem'}}>
                <Cards/>
            </div>
        </>
    );
};

export default cabezera;