import Frame from '../../assest/Frame.svg';
import logo from '../../assest/logo.svg';
import React from 'react';

const Login = () => {
    return (
        <div className="login" >
            <figure>
                <img src={Frame} />
            </figure>
            <div>
                <img src={logo} />
                <h2>Login</h2>
                <form>
                    <label for="text">Username</label>
                    <input type="name" id="text" placeholder="Enter your username" /><br></br>
                </form>
            </div>
        </div>
    )
}
export default Login;