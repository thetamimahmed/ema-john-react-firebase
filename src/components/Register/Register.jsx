import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders';

const Register = () => {
    const [error, setError] = useState('')
    const {createUser, user} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;

        console.log(email, password, confirmPassword)
        setError('')
        if(password != confirmPassword){
            setError('Your Password is not matched')
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 character')
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset()
        })
        .catch(error =>{
            setError(error.message)
        })

    }

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div className="form-control">
                    <label htmlFor='email'>Email:</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm" required />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button type="submit">Register</button>
                </div>
            </form>
            <div className="register">
              <Link to="/login">Already Have An Account?</Link>
            </div>
            <div className="google">
                <span>Continue with Google</span>
            </div>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Register;