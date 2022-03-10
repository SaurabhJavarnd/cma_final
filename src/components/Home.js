import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Home = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('/signup');
    }
    const welcome = ()=>{
        localStorage.val
        navigate('/alldetails');
    }
    return (
        <div>
            <h1 className='home'>Contact Management App</h1>
            <ul className='home-ul'>
                <li>{auth ? <Link onClick ={welcome} to="/">Home </Link> : <Link to = "/login">Login</Link>}</li>
                <li>{auth ? "" : <Link to="/signup">Sign Up</Link>}</li>
                <li>{auth ? <Link onClick={logout} to="/login"> Logout </Link>: ""}</li>
            </ul>
        </div>
    );
};

export default Home;