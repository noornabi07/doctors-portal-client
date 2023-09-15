import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { HiOutlineLocationMarker } from 'react-icons/Hi';
import { MdOutlineEventAvailable } from 'react-icons/Md';
import { BiDollarCircle } from 'react-icons/Bi';

const DoctorsCard = ({ doctor }) => {
    const { img, name, rating, title, location, available, visit } = doctor;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="px-10">
                    <h2 className="font-bold mt-3">{name}</h2>
                    <p className='text-slate-500 mb-2'>{title}</p>
                    <Rating style={{ maxWidth: 100, }} value={rating} readOnly />
                    <div className="divider"></div>
                    <div className='flex items-center gap-4 text-slate-500'>
                        <HiOutlineLocationMarker className='text-2xl'></HiOutlineLocationMarker>
                        <h3>{location}</h3>
                    </div>
                    <div className='flex items-center gap-4 my-3 text-slate-500'>
                        <MdOutlineEventAvailable className='text-2xl'></MdOutlineEventAvailable>
                        <h3>{available}</h3>
                    </div>
                    <div className='flex items-center gap-4 text-slate-500'>
                        <BiDollarCircle className='text-2xl'></BiDollarCircle>
                        <h3>${visit}</h3>
                    </div>
                    <div className="flex justify-center my-5">
                        <button className="btn btn-block btn-outline btn-warning">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;