import logo from '../assest/logo.svg';
import React from 'react';

const Footer = () => {
    return (
        <section className="footer-content">
            <div>
                <h5>Products</h5>
                <ul>
                    <li>Website Builder</li>
                    <li>Create a Blog</li>
                </ul>
            </div>
            <div>
                <h5>Features</h5>
                <ul>
                    <li>Themes</li>
                    <li>Plugins</li>
                </ul>
            </div>
            <div>
                <h5>Company</h5>
                <ul>
                    <li>About</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h5>Help Center</h5>
                <ul>
                    <li>Contact Us</li>
                    <li>Report an Issue</li>
                </ul>
            </div>
            <div>
                <img src={logo} alt='' />
                <p>© 2023 Daisy Techie Systems</p>
                <p>All rights reserved</p>
                <form action='' className="language-picker">
                    <label for="language-picker-select"></label>
                    <select name="language" id='language'>
                        <option lang='English'>English</option>
                        <option lang="japenese">Japanese</option>
                        <option lang='pidgin'>Pidgin</option>
                        <optiom lang="french">French</optiom>
                    </select>
                </form>
            </div>
        </section>
    )
}
export default Footer;