import Mockups from '../assest/Mockups.png';
const Customize = () =>{
    return(
        <section className="template">
            <figure>
<img src={Mockups} alt=""/>
            </figure>
           <div>
            <h4>Daisy Templates</h4>
            <h2>Showcase and convert with customised landing pages</h2>
            <p>From stunning visuals to seamless navigation, 
                our easy-to-use website builder empowers you to create 
                a site that not only reflects your vision but also captivates 
                your audience, ensuring an exceptional user experience from start to finish.</p>
                <ul>
                    <li>Add links, images, videos, and texts in sections</li>
                    <li>Customize fonts, colors and custom domain</li>
                    <li>Track page views, top links and total clicks</li>
                    <li>Quick links for social media, phone and email</li> 
                </ul>
                <button className='template'>Find Templates</button>
            </div> 
        </section>
    )
}
export default Customize;