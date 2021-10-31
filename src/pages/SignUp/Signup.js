import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/icons/google.png';
import { NavLink, useHistory, useLocation } from 'react-router-dom';


const Signup = () => {
    const { signInWithGoogle, setUser, createNewUser, setIsLoading, updateUserInfo } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home';

    // getting input value and set in state
    const handleDisplayName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        createNewUser(email, password)
            .then(result => {
                setIsLoading(true);     // set user loading state
                updateUserInfo(name);      // update user's display name
                setUser(result.user);       // set user
                history.push(url)           // Redirect user where user wanted to go.
            })
            .catch(err => console.log(err.message))
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
        <div className="signup-section pt-2">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <h2 className="text-center mb-3">Please sign up here</h2>
                    <Form onSubmit={handleSignUp}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                onBlur={handleDisplayName}
                                id="floatingInputName"
                                type="text"
                                placeholder="Full name" />
                            <label htmlFor="floatingInputName">Full Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                onBlur={handleEmail}
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                onBlur={handlePassword}
                                id="floatingPasswordCustom"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>
                        <Button className="w-100 mt-3" variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="text-center my-2">Or sign in using</p>
                    <div className="text-center">
                        <button onClick={handleGoogleSignIn} className="border-0 bg-transparent">
                            <Image src={googleIcon} rounded width="40" height="40" />
                        </button>
                    </div>
                    <p className="text-center text-danger mt-3">Already Have an Account? Please Login
                        <NavLink
                            className="text-danger text-decoration-none"
                            to="/login"
                        > <span className="text-decoration-underline">here</span></NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
