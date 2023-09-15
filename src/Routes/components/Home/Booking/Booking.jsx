import React from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/Bs';
import { HiOutlineLocationMarker } from 'react-icons/Hi';

const Booking = () => {
    return (
        <div className='my-20 mx-20 bg-emerald-950 rounded-lg	 text-white p-10'>
            <div className='flex justify-around items-center'>
                <div className='w-1/3'>
                    <h1 className='text-4xl font-bold mb-4'>Contact With Us</h1>
                    <p>Aspiring doctors usually start with a bachelor's degree in a related field such as biology, chemistry, or pre-med. This provides them with a foundational understanding of science.</p>
                    <div className='flex gap-3 mt-5'>
                        <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
                        <p>+8801318993159</p>
                    </div>
                    <div className='flex gap-3'>
                        <HiOutlineLocationMarker></HiOutlineLocationMarker>
                        <p>Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
                {/* right site */}
                <div>
                    <div className="w-full text-white">
                        <form>
                            <div className='flex gap-5'>
                                <div className="">
                                    <input type="text" placeholder="Name" className="input input-bordered bg-emerald-900" />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" className="input bg-emerald-900 input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-5 my-5'>
                                <div className="form-control">
                                    <input type="text" placeholder="Mobile Number" className="input bg-emerald-900 input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text"  placeholder="Doctor Name" className="input bg-emerald-900 input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="form-control">
                                    <input type="date" placeholder="Date" className="input bg-emerald-900 px-10 input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text"  placeholder="Time" className="input bg-emerald-900 input-bordered" />
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className='btn bg-slate-500	 border-0 btn-primary' value="Book Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;