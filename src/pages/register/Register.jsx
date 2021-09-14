import React, { useState } from 'react';
import Axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './register.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Register () {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [registrationno, setregistrationno] = useState("");
    const [password, setpassword] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/registeruser", {
            firstname: firstname,
            lastname: lastname,
            registrationno: registrationno,
            password: password,
        }).then(() => {
            alert("User Successfully Added!")
        });
    };

    
    return (
        
        <div className="register">
            <h1> Register </h1>
            <form className="register-form">
                <div className="register-item">
                    <input type="text" placeholder="First Name" onChange={(e) => {
                        setfirstname(e.target.value);
                    }} />
                </div>

                <div className="register-item">
                    <input type="text" placeholder="Last Name" onChange={(e) => {
                        setlastname(e.target.value);
                    }} />
                </div>

                <div className="register-item">
                    <input type="text" placeholder="Registration Number" onChange={(e) => {
                        setregistrationno(e.target.value);
                    }} />
                </div>

                <div>
                    <input type="password" placeholder="Create Password" onChange={(e) => {
                        setpassword(e.target.value);
                    }} />
                </div>

                <div>
                    <input type="password" placeholder="Re-Enter Password" />
                </div>

                <Button className="create-button" onClick={register}> Register </Button>
                

            </form>
            <h3> Already Have An Account? <Link className="link" to="/login"> Login </Link></h3>
            <Link to="/" className="link"> <Button className="goback"> <ArrowBackIcon /> GO BACK </Button> </Link>
        </div>
    )
}

export default Register;