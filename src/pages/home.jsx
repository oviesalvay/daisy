import '../styles/'
import innovation from '../assest/innovation.svg';
import innovate from '../assest/innovate.svg';
import Rectangle from '../assest/Rectangle.svg';
import website from '../assest/website.png';
import Customised from '../component/customised';
import Signature from '../component/signature';
import About from '../component/about';
import Footer from '../component/footer';

const Home = () => {
    return (
        <section className="introduction">
            <div className='intro'>
                <div>
                    <h1>Build the Website of Your Dreams</h1>
                    <p>Experience the freedom of design as you effortlessly
                        shape every element, customize every detail, and bring your
                        vision to life with our user-friendly website builder.</p>
                    <img src="website" alt='' />
                    <button className="sign">Get Started</button>
                </div>
                <div>
                    <img src={innovation} alt="innovation" />
                    <img src={innovate} alt="" />
                    <img src={Rectangle} alt="" />
                </div>
            </div>
            <Customised />
            <Signature />
            <About />
            <Footer />
        </section>
    );
};
export default Home;