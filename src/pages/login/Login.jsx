import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import Axios from 'axios';
import './login.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function Login () {

    let history = useHistory();

    const [regnumber, setregnumber] = useState("");
    const [pass, setpass] = useState("");

    const [loginstatus, setloginstatus] = useState("");


    const redirect = () => {
        history.push('/welcome')
        history.replace();
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            regnumber: regnumber,
            pass: pass,
        }).then((response) => {

            if (response.data.message) {
                setloginstatus(response.data.message)
            }
            else {
               redirect();
            }
        });
    };

    return (
        <div className="login">
            <h1> Login </h1>
            <form className="login-form" onSubmit={login} >

                <div className="login-item">
                    <input type="text" placeholder="Registration Number" onChange={(e) => {
                        setregnumber(e.target.value);
                    }} />
                </div>

                <div className="login-item">
                    <input type="password" placeholder="Password" onChange={(e) => {
                        setpass(e.target.value);
                    }} />
                </div>
                <Button className="create-button" onClick= {login} > Login </Button>

            </form>
            <h2 className="error-message"> {loginstatus} </h2> 

            <h3> Don't Have An Account? <Link className="link" to="/register"> Register </Link></h3>
            <Link to="/" className="link"> <Button className="goback"> <ArrowBackIcon /> GO BACK </Button> </Link>
            
        </div>
    )
}

export default Login;