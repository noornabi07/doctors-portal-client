import React from 'react';
import { LuTimer } from 'react-icons/Lu';
import { CiLocationOn } from 'react-icons/Ci';
import { BsFillTelephoneForwardFill } from 'react-icons/Bs';

const Contact = () => {
    return (
        <div className='grid grid-cols-3 gap-5 px-20'>
            <div className='bg-emerald-900 text-white p-10 flex items-center gap-8 rounded-lg'>
                <div className='text-3xl font-semibold'>
                    <LuTimer></LuTimer>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Opening Hours</h2>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className='bg-amber-500 text-white p-10 flex items-center gap-8 rounded-lg'>
                <div className='text-3xl font-semibold'>
                    <CiLocationOn></CiLocationOn>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Our Locations</h2>
                    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className='bg-emerald-900 text-white p-10 flex items-center gap-8 rounded-lg'>
                <div className='text-3xl font-semibold'>
                    <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>Contact Us</h2>
                    <p>+880131899159</p>
                    <p>+8801826147180</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;