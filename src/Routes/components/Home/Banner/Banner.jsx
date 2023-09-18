import React from 'react';
import bannerGroup from '../../../../assets/banner/banner-group.png'

const Banner = () => {
    return (
        <div className='bg-emerald-900 text-white pb-5 md:pb-0 md:h-[600px] md:flex items-center justify-evenly px-3 md:px-0'>
            <div className='md:w-1/3 pt-20'>
                <h2 className='text-4xl font-bold'>Your Best Medical Help Center</h2>
                <p className='my-5'>Welcome to the premier online hub for healthcare professionals! Our doctors portal is your one-stop destination for all your medical needs. </p>
                <button className="btn bg-orange-400 border-none text-white">All Services</button>
            </div>

            <div className='md:mt-10'>
                <img src={bannerGroup} alt="" />
            </div>
        </div>
    );
};

export default Banner;