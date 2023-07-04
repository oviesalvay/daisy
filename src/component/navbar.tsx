import '../styles/navbar.scss';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from 'react';
import Signup from '../pages/register/signup';

const Navbar = () => {
    const [shownav, setShowNav] = useState(false)
    const handleClick = () => {
        setShowNav(!shownav)
    }

    return (
        <header>
            <nav>
                <div className="nav-words">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className={shownav ? "nav-content active" : "nav-content"}>
                        <NavLink to="/" className='navlink'>Home</NavLink>
                        <NavLink to='/template' className='navlink'>Templates</NavLink>
                        <NavLink to='/about' className='navlink'>About</NavLink>
                    </div>
                </div>
                <div className="login">
                    <Signup />
                    <button>Login</button>
                    <button className="sign">Sign Up</button>
                </div>
                <div className='hamburger'>
                    {shownav ? <FaTimes onClick={handleClick} size={25} /> : <FaBars onClick={handleClick} size={25} />}
                </div>
            </nav >
        </header >
    )
}
export default Navbar;