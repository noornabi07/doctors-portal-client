import React from 'react';
import logo from '../../../../assets/logo/footer-logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-20">
            <aside className='-mt-4'>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                <button class="btn mt-5 btn-outline btn-warning">More Details</button>
            </aside>
            <nav>
                <header className="text-xl font-bold">Quick Links</header>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Doctors</a>
                <a className="link link-hover">Departments</a>
                <a className="link link-hover">Online Payment</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">My Account</a>
            </nav>
            <nav>
                <header className="text-xl font-bold">Doc House Services</header>
                <a className="link link-hover">Pediatric Clinic</a>
                <a className="link link-hover">Diagnosis Clinic</a>
                <a className="link link-hover">Cardiac Clinic</a>
                <a className="link link-hover">Laboratory Analysis</a>
                <a className="link link-hover">Gynecological Clinic</a>
                <a className="link link-hover">Personal Counseling</a>
                <a className="link link-hover">Dental Clinic</a>
            </nav>
            <nav>
                <header className="text-xl font-bold">Working Hours</header>
                <a className="link link-hover">Monday - 10 am to 7 pm</a>
                <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                <a className="link link-hover">Friday - 10 am to 7 pm</a>
                <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                <a className="link link-hover">Sunday - 10 am to 7 pm</a>
            </nav>
        </footer>
    );
};

export default Footer;