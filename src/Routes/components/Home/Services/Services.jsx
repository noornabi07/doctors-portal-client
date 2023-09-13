import React from 'react';
import maindoctor from '../../../../assets/home/maindoctor.png'
import TabButton from '../../TabPanel/TabPanel';

const Services = () => {
    return (
        <div className='my-20 md:px-20'>
            <div className='flex items-center'>
                <div className='w-1/2'>
                    <img className='w-[500px]' src={maindoctor} alt="" />
                </div>

                {/* right section */}
                <div className='w-1/2'>
                    <div>
                        <h1 className='text-4xl mb-3 text-orange-400 font-bold'>Our Services</h1>
                        <p>Explore a comprehensive range of tools, from patient management systems to research databases, all designed to streamline your daily tasks and empower your medical journey. Join us today and experience the future of healthcare at your fingertips."</p>
                    </div>
                    <TabButton></TabButton>
                </div>
            </div>
        </div>
    );
};

export default Services;