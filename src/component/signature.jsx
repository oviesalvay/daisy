import React from 'react';
import joygirl from '../assest/joygirl.png';
import joy from '../assest/joy.png';
// import color from '../assest/color.png';
import '../styles/signature.scss';

const Signature = () => {
    return (
        <section className="signature">
            <div>
                <h3>Generate your HTML email signature</h3>
                <p>Create HTML email signature easily.
                    Choose colors, layouts, add links and banners.
                    Engage and increase sales from every email sent.</p>
                <ul>
                    <li>Create HTML email signatures in less than a minute</li>
                    <li>Professional layouts that suit your brand</li>
                    <li>Customize fonts, colors and images style</li>
                    <li>Add links for social media, phone and email</li>
                    <li>Add Banners, custom text and disclaimer</li>
                </ul>
                <button className="find">Create Signature</button>
            </div>
            <figure>
                <img src={joygirl} alt='' />
                <img src={joy} alt='' />
                {/* <img src={color} alt=""/> */}
            </figure>
        </section>
    )
}
export default Signature;