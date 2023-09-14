import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import DoctorsCard from './DoctorsCard';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () =>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, [])
    return (
        <div>
            <div className='w-3/4 mx-auto mt-32 text-center'>
                <SectionTitle heading="Our Expert Doctors" paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."></SectionTitle>
            </div>
            {/* doctors card */}
            <div className='grid grid-cols-3 gap-8 mt-20'>
               {
                doctors.map(doctor => <DoctorsCard key={doctor.id} doctor={doctor}></DoctorsCard>)
               }
            </div>
        </div>
    );
};

export default Doctors;