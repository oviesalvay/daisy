import Navbar from '../../component/navbar';
import logo from '../../assets/logo.svg';
import framed from '../../assets/framed.svg';

const Signup = () => {
    return (
        <>
            <Navbar />
            <section className='sign-up'>
                <div>
                    <img src={logo} alt='' />
                    <h2>Sign Up</h2>
                    <form>
                        <label htmlFor='text'>Email Address</label><br></br>
                        <input type="email" id="email" placeholder="Enter your Email Address" /><br></br>
                        <label htmlFor='text'>Username</label><br></br>
                        <input type="name" id="name" placeholder="Enter your username" /><br></br>
                        <label htmlFor='text'>Password</label><br></br>
                        <input type="p-word" id="p-word" placeholder="Enter your password" /><br></br>
                        <label htmlFor='text'>Confirm Password</label><br></br>
                        <input type="pword" id="pword" placeholder="Enter your password" /><br></br>
                        <input type="checkbox" id="checkbox" /><br></br>
                        <label htmlFor='checkbox'>I agree and accept the Terms of Service</label>
                    </form>
                    <button className='sign-up'>Sign Up</button>
                </div>
                <div>
                    <img src={framed} alt="" />
                </div>
            </section>
        </>
    )
}
export default Signup;