import React from 'react';
import jeans from './jeans.jpg';
import shoes from './shoes.jpg';
import tshirt from './tshir.jpg';
import watch from './watchh.jpg';

function Product() {
    return (
        <>
            {/* <div className="flex bg-transparent items-center justify-center"> */}
            <div className="flex flex-col bg-transparent m-10 items-center justify-center">
                <div className="flex flex-col bg-white p-8 rounded shadow-md w-80 md:w-full lg:w-full xl:w-full ">
                    <div className='grid grid-rows-4 md:grid-cols-4 lg:grid-cols-4'>
                        <div className=''><img src={tshirt} alt="T-shirt" className='hover:grayscale hover:border-2 cursor-pointer' /></div>
                        <div className=''><img src={shoes} alt="Shoes" className='hover:grayscale hover:border-2 cursor-pointer' /></div>
                        <div className=''><img src={jeans} alt="jeans" className='hover:grayscale hover:border-2 cursor-pointer' /></div>
                        <div className=''><img src={watch} alt="watch" className='hover:grayscale hover:border-2 cursor-pointer' /></div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};
    
export default Product;