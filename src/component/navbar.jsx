import React from "react";
import '../styles/navbar.scss';
import { NavLink } from "react-router-dom";
import logo from '../assest/logo.svg';

const Navbar = () => {

    return (
        <header>
            <nav>
                <div className="nav-content">
                    <img src={logo} />
                    <NavLink to="/" className='navlink'>Home</NavLink>
                    <NavLink to='/template' className='navlink'>Templates</NavLink>
                    <NavLink to='/about' className='navlink'>About</NavLink>
                </div>
                <div>
                    <button>Login</button>
                    <button className="sign">Sign Up</button>
                </div>
            </nav>
        </header >
    )
}
export default Navbar;