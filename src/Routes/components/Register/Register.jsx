import React, { useContext } from 'react';
import bgauth from '../../../assets/banner/Frame.png'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('Updated User profile');
                        reset()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your Account Create Successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');
                    })

            })
            .catch(error => { console.log(error) });

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-20 lg:flex-row mt-20">
                    <div className="text-center lg:text-left">
                        <img className="bg-emerald-950 p-16" src={bgauth} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className='text-2xl text-orange-400 font-bold text-center mb-4'>Sign up to Doc House</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Enter Your Name" className="input input-bordered" />
                                {errors.name && <p className='text-red-600'>Name is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="Enter Your Photo URL" className="input input-bordered" />
                                {errors.photoURL && <p className='text-red-600'>Photo URL is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Or Username</span>
                                </label>
                                <input type="text" {...register('email', { required: true })} placeholder="Username and Email Adress" className="input input-bordered" />
                                {errors.email && <p className='text-red-600'>Email is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true, maxLength: 8, minLength: 6 })} placeholder="Enter Your Password" className="input input-bordered" />
                                {errors.password && <p className='text-red-600'>Password is required.</p>}
                                {errors.maxLength && <p className='text-red-600'>Password must less than 8 character.</p>}
                                {errors.minLength && <p className='text-red-600'>Password must be up to 6 character.</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn border-0 bg-orange-400 btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='text-center mb-4 font-semibold'>Have your account? <Link to="/login" className='text-orange-400 text-lg'>Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;