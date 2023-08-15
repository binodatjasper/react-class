import React from "react";
import { Link, NavLink } from 'react-router-dom'

import Logo from "./../assets/images/logo.png"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-12">
                        <div className="header-logo">
                            <Link to={'/'}>
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-9 col-12">
                        <nav className="navbar">
                            <ul className="navbar-list">
                                <li className="navbar-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="navbar-item">
                                    <NavLink to="/about">About Us</NavLink>
                                </li>
                                <li className="navbar-item">
                                    <NavLink to="/sevices">Sevices</NavLink>
                                </li>
                                <li className="navbar-item">
                                    <NavLink to="/gallery">Gallery</NavLink>
                                </li>
                                <li className="navbar-item">
                                    <NavLink to="/contact">Contact Us</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}