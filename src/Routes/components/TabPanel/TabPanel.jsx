import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import services1 from '../../../assets/home/service1.png'
import services2 from '../../../assets/home/services2.jpg'
import services3 from '../../../assets/home/services3.jpg'

const TabButton = () => {
    return (
        <div>
            <Tabs>
                <div className='text-center text-xs md:text-lg mt-8 mb-5 text-orange-400 font-semibold'>
                    <TabList>
                        <Tab>Cavity Protection</Tab>
                        <Tab>Cosmetic Dentisty</Tab>
                        <Tab>Oral Sergery</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <img  src={services1} alt="" />
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold mb-2'>Connecting Doctors and Patients</h1>
                        <p>Connecting Doctors and Patients" is a comprehensive service that bridges the gap between healthcare providers and individuals seeking medical care. This service aims to facilitate efficient and accessible healthcare by offering a range of features and benefits</p>

                        <p className='mt-3'>Integration of telehealth services, allowing patients to consult with doctors remotely. This can be especially valuable for non-urgent medical issues, follow-up visits, or when physical distance is a barrier to in-person care.</p>

                        <button class="btn mt-5 btn-outline btn-warning">More Details</button>
                    </div>
                </TabPanel>
                <TabPanel>
                    <img style={{width: '558px', height: '350px'}} src={services2} alt="" />
                    <div className='mt-10'>
                        <h1 className='text-2xl font-bold mb-2'>Your Trusted Medical Partner</h1>
                        <p>Connecting Doctors and Patients" is a comprehensive service that bridges the gap between healthcare providers and individuals seeking medical care. This service aims to facilitate efficient and accessible healthcare by offering a range of features and benefits</p>

                        <p className='mt-3'>Integration of telehealth services, allowing patients to consult with doctors remotely. This can be especially valuable for non-urgent medical issues, follow-up visits, or when physical distance is a barrier to in-person care.</p>

                        <button class="btn mt-5 btn-outline btn-warning">More Details</button>
                    </div>
                </TabPanel>
                <TabPanel>
                   <img style={{width: '558px', height: '350px'}} src={services3} alt="" />
                   <div className='mt-10'>
                        <h1 className='text-2xl font-bold mb-2'> Bridging the Gap in Healthcare</h1>
                        <p>Connecting Doctors and Patients" is a comprehensive service that bridges the gap between healthcare providers and individuals seeking medical care. This service aims to facilitate efficient and accessible healthcare by offering a range of features and benefits</p>

                        <p className='mt-3'>Integration of telehealth services, allowing patients to consult with doctors remotely. This can be especially valuable for non-urgent medical issues, follow-up visits, or when physical distance is a barrier to in-person care.</p>

                        <button class="btn mt-5 btn-outline btn-warning">More Details</button>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabButton;