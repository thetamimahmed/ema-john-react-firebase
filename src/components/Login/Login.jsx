import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProviders';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('')
    const {signInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleLogIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        signInUser(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset()
            navigate(from, { replace: true });
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div style={{textAlign:'center'}}>
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="register">
                <Link to="/register">Create new account</Link>
            </div>
            <div className="google">
                <span>Continue with Google</span>
            </div>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Login;