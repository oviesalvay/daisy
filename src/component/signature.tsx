import joygirl from '../assets/joygirl.svg'
import joy from '../assets/joy.png';
// import color from '../assest/color.png';
import Facebook from '../assets/Facebook.png';
import gmail from '../assets/gmail.png';
import twitter from '../assets/twiter.png';
import '../styles/signature.scss';

const Signature = () => {
    return (
        <section className='sign'>
            <section className="signature">
                <div className='generate-signature'>
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
                    {/* <img src={color} alt=""/> */}
                </figure>
            </section>
            <div className='joygirl'>
                <figure>
                    <img src={joy} alt='' />
                </figure>
                <div>
                    <h5>Joygirl</h5>
                    <h6>UI/UX Designer</h6>
                    <h6>Email:<span className=''>hijoygirl@gmail.com</span></h6>
                    <img src={Facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={gmail} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Signature;