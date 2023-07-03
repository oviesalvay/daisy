import daisy from '../assets/daisy.png';
import '../styles/about.scss';

const About = () => {
    return (
        <section className="about-us">
            <figure>
                <img src={daisy} alt='' />
            </figure>
            <div className='about'>
                <h6>What is Daisy?</h6>
                <h3>Helping businesses succeed </h3>
                <p>A platform for creatives. Daisy is
                    helping creators make a living by
                    offering them simple tools to create
                    a one-page site that enables them
                    tocreating your perfect site becomes
                    a seamless and enjoyable process, empowering you to showcase your unique brand and style.</p>
                <button className='find'>Learn More</button>
            </div>
        </section>
    )
}
export default About;