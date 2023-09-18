import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import DoctorsCard from './DoctorsCard';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className='md:px-20 px-3'>
            <div className='w-3/4 mx-auto mt-10 md:mt-32 text-center'>
                <SectionTitle heading="Our Expert Doctors" paragraph="
                    Doctors play a crucial role in our society, as they are responsible for the maintenance and restoration of our health. Their work is demanding, often requiring years of rigorous education and training, and it carries a significant burden of responsibility."></SectionTitle>
            </div>
            {/* doctors card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
                {
                    doctors.map(doctor => <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default Doctors;