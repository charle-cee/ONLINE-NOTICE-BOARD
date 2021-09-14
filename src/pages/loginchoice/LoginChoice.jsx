import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function LoginChoice () {
    return (
        <div>
            <h1> You need to Login To Be Able To Post Announcements and Events </h1>
            <div className="button-container">
            <Link className="link" to="/login"> <Button className="login-button"> Login </Button></Link> 
            <Link className="link" to="/register" ><Button className="signup-button"> Sign Up </Button></Link>
            </div>
        </div>
    )
}

export default LoginChoice;