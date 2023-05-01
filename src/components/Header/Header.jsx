import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const{user, logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut() && logOut()
        .then(()=>{
            console.log('log out')
        })
        .catch(error => console.log(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                {user ? <><span style={{color:'orange', margin:'0px 10px'}}>{user.email}</span> <button style={{backgroundColor:'orange',}} onClick={handleSignOut}>Sign Out</button></>: <Link to="/login">Sign In</Link>}
            </div>
        </nav>
    );
};

export default Header;