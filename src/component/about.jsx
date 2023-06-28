import daisy from '../assest/daisy.png';
const About = ()=>{
    return(
        <section className="about-us">
            <figure>
                <img src={daisy} alt='' />
            </figure>
            <div>
                <h4>What is Daisy?</h4>
                <h3>Helping businesses succeed </h3>
                <p>A platform for creatives. Daisy is
                     helping creators make a living by 
                     offering them simple tools to create
                      a one-page site that enables them 
                      tocreating your perfect site becomes
                       a seamless and enjoyable process, empowering you to showcase your unique brand and style.</p>
                       <button className='template'>Learn More</button>

            </div>
        </section>
    )
}
export default About;