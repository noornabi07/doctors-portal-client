import React from 'react';
import bannerGroup from '../../../../assets/banner/banner-group.png'

const Banner = () => {
    return (
        <div className='bg-emerald-900 text-white h-[600px] flex items-center justify-evenly'>
            <div className='w-1/3'>
                <h2 className='text-4xl font-bold'>Your Best Medical Help Center</h2>
                <p className='my-5'>Welcome to the premier online hub for healthcare professionals! Our doctors portal is your one-stop destination for all your medical needs. </p>
                <button className="btn bg-orange-400 border-none text-white">All Services</button>
            </div>

            <div className='mt-10'>
                <img src={bannerGroup} alt="" />
            </div>
        </div>
    );
};

export default Banner;