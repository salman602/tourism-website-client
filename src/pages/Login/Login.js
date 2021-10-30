import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import fbIcon from '../../images/icons/facebook.png';
import googleIcon from '../../images/icons/google.png';
// import twitterIcon from '../../images/icons/twitter.png';
import './Login.css';
// import { NavLink } from 'react-router-dom';
// import logo from '../../images/logo.png';

// import useFirebase from '../../hooks/useFirebase';
import { Col, Container, Image, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';



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

    const handleLoginWithPassword = (e) =>{
        e.preventDefault();
        console.log(email, password);
        loginWithEmailAndPassword(email,password)
        .then((result) => {
            setIsLoading(true)
            setUser(result.user)
            history.push(url)
          })
          .finally(()=> setIsLoading(false))
          
    }

    


    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //     const {email, password} = data;
    //     console.log(email,password)
    //     loginWithPassword(email,password)
    //     .then(res => console.log(res.user))
    //     console.log(data)
    // };


    

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(res => {
            setIsLoading(true)
            setUser(res.user);
            history.push(url)
        })
        .catch(err => console.log(err.message))
        .finally(()=> setIsLoading(false))
        
    };
    return (
        <Container>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder="Your email" />
                <input type="password" {...register("password")} placeholder="password" />
                
                <input type="submit" />
            </form> */}

            <form onSubmit={handleLoginWithPassword}>
                <input onBlur={handleGetEmail} type="email" placeholder="Email" />
                <input onBlur={handleGetPassword} type="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>

            <Row>
                <Col xs={6} md={4}>

                </Col>
                <Col xs={6} md={4}>
                    <button onClick={handleGoogleSignIn} className="border-0 bg-transparent">
                        <Image src={googleIcon} rounded width="40" height="40" />
                    </button>
                </Col>
                <Col xs={6} md={4}>

                </Col>
            </Row>

        </Container>
    );
};

export default Login;