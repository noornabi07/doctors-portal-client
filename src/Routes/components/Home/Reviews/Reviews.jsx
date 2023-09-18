import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { data } from 'autoprefixer';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='md:px-20'>
            <div className='w-3/4 mx-auto my-10 lg:mt-32 text-center'>
                <SectionTitle heading="What Our Patients Says" paragraph="Non-permitted PHI disclosures, including telling stories of patients that contain identifiable information, can be a serious HIPAA violation. These violations can result in serious consequences for both the employee who committed."></SectionTitle>
            </div>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div>
                            <div className='text-center w-1/2 mx-auto'>
                                <div className='md:flex justify-center gap-4'>
                                    <img className='w-20 hidden md:block h-20 rounded-full' src={review.img} alt="" />
                                    <div>
                                        <h2 className='font-bold text-2xl text-orange-400'>{review.name}</h2>
                                        <h4 className='text-lg font-semibold'>{review.title}</h4>
                                        <div className='flex justify-center'>
                                            <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly></Rating>
                                        </div>
                                    </div>
                                </div>
                                <p className=''>{review.reviews}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;