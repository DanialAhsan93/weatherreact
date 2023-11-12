import React from 'react';
import './navbar.css';
import navlogo from '../components/images/navlogo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-transparent pt-lg-5">
                <div className="container px-0 nav-contain">
                        <Link to={'/'} className="navbar-brand text-light m-0" href="#">
                            <img src={navlogo} alt="#" className='img-fluid logo' />
                        </Link>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">

                            <span className="navbar-toggler-icon "></span>

                        </button>

                    <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >

                        <div className="offcanvas-body d-flex justify-content-between ">
                            <div className="container d-lg-flex p-0 ">
                                <ul className="navbar-nav m-md-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item p-lg-0 py-3">
                                            <Link to='/' className=' nav-link text-light'>Home </Link>
                                    </li>
                                        <li className="nav-item p-lg-0 py-3">
                                            <Link to='/about' className=' nav-link text-light'>About us </Link>
                                        </li>

                                        <li className="nav-item p-lg-0 py-3">
                                            <Link to='/contact' className=' nav-link text-light'>Contact us </Link>
                                        </li>
                                    
                                </ul>
                                <a href="#" className=' m-lg-0 my-3'>
                                    <button className=' btn-1'>Sign Up</button>
                                </a>

                            </div>

                            <button type="button" className="btn-close bg-light d-lg-none" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>

                        </div>
                    </div>

                </div>
            </nav>

        </>
    )
}


