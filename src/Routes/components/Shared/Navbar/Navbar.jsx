import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../../../assets/logo/doctors-nav-logo.png'
import { AuthContext } from '../../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Appointment</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        {
            user
                ? <li onClick={handleLogOut}><Link>Log Out</Link></li> : <li><Link to="/login">Login</Link></li>
        }

    </>

    return (
        <div>
            <div className="navbar bg-base-300 bg-opacity-30 fixed z-10 px-10 max-w-screen-xl text-orange-400 font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img className='w-40' src={navLogo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-md">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                     <div className="avatar">
                            <div className="w-12">
                                {user && <img src={user?.photoURL} />}
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;