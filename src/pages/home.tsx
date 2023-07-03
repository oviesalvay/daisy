import '../styles/home.scss';
import innovation from '../assets/innovation.svg';
import Rectangled from '../assets/Rectangled.png';
import slider from '../assets/slider.svg';
// import website from '../assest/website.png';
import joy from '../assets/joy.png';
import Customised from '../component/customised';
import Signature from '../component/signature';
import About from '../component/about';
import Navbar from '../component/navbar';


const Home = () => {
    return (
        <section className="introduction">
            <div className='intro'>
                <div className="intro-to">
                    <h1>Build the Website of Your Dreams</h1>
                    <p>Experience the freedom of design as you effortlessly
                        shape every element, customize every detail, and bring your
                        vision to life with our user-friendly website builder.</p>
                    <img src="website" alt='' />
                    <button className="sign">Get Started</button>
                </div>
                <div>
                    <img src={joy} alt="" className="joy" />
                    <img src={Rectangled} alt="" className='rectangled' />
                    <img src={innovation} alt="innovation" />
                    <img src={slider} alt="" className='slider' />
                </div>
            </div>
            <Customised />
            <Signature />
            <About />
        </section>
    );
};
export default Home;