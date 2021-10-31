import React, { useState } from 'react';


import googleIcon from '../../images/icons/google.png';

import './Login.css';
import { Container, Image} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';



const Login = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();


    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home';


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGetEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLoginWithPassword = (e) => {
        e.preventDefault();
        console.log(email, password);
        loginWithEmailAndPassword(email, password)
            .then((result) => {
                setIsLoading(true)
                setUser(result.user)
                history.push(url)
            })
            .finally(() => setIsLoading(false))

    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
            })
            .catch(err => console.log(err.message))
            .finally(() => setIsLoading(false))

    };
    return (
        <Container className="d-flex justify-content-center align-items-center">

            <div className="login-form">
                <h2>Please Login here</h2>
                <form onSubmit={handleLoginWithPassword}>
                    <input className="w-100" onBlur={handleGetEmail} type="email" placeholder="Email" /> <br />
                    <input className="w-100" onBlur={handleGetPassword} type="password" placeholder="Password" /> <br />
                    <input className="w-100 btn-danger border-0 rounded-3" type="submit" value="Login" />
                </form>
                <p className="text-center my-2">Or Log in using</p>
                <div className="text-center">
                    <button onClick={handleGoogleSignIn} className="border-0 bg-transparent">
                        <Image src={googleIcon} rounded width="40" height="40" />
                    </button>
                </div>
                <p className="text-center text-danger mt-3">Don't Have an Account? Please Sign Up
                    <NavLink
                        className="text-danger text-decoration-none"
                        to="/signup"
                    > <span className="text-decoration-underline">here</span></NavLink>
                </p>
            </div>
        </Container>
    );
};

export default Login;
