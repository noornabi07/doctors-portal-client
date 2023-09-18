import React, { useContext } from 'react';
import bgauth from '../../../assets/banner/Frame.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your account login successfull',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace: true});
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-20 lg:flex-row mt-20">
                    <div className="text-center lg:text-left">
                        <img className="bg-emerald-950	p-10" src={bgauth} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-2xl text-orange-400 font-bold text-center mb-8'>Sign in to Doc House</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Or Username</span>
                                </label>
                                <input type="text" name='email' placeholder="Username and Email Adress" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn border-0 bg-orange-400 btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4 font-semibold'>Please register at first. Go to <Link to="/register" className='text-orange-400 text-lg'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;