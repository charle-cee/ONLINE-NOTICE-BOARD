import React, {useState} from 'react';
import './create.css';
import Axios from 'axios';
import Sidebar from '../sidebar/Sidebar';


function Create () {

    const [subject, setSubject] = useState("");
    const [details, setDetails] = useState("");
    const [dateposted, setDateposted] = useState("");
    const [category, setCategory] = useState("");
    const [phonenumber, setPhonenumber] = useState("");



    const submitAnnounce = () => {
        Axios.post("http://localhost:3001/api", {
            subject: subject,
            details: details,
            dateposted: dateposted,
            category: category,
            phonenumber: phonenumber,
        }).then(() => {
            alert("sucessful!");
        }); 
    };

    return (
        <div className="create">
            <h1 className="create-title"> Create Announcement </h1>
            <form className="create-form" >
                <div className="create-item">
                    <label> Subject </label>
                    <input type="text" name="subject" onChange={(e) => {
                        setSubject(e.target.value)
                    }} />
                </div>

                <div className="create-item">
                    <label> Details </label>
                    <input type="text-field" name="details" onChange={(e) => {
                        setDetails(e.target.value)
 
                    }} />
                </div>

                <div className="create-item">
                    <label> Date Posted </label>
                    <input type="date" name="dateposted"onChange={(e) => {
                        setDateposted(e.target.value)
                    }} />
                </div>

                <div className="create-item">
                    <label> Category </label>
                    <input type="text" name="category" onChange={(e) => {
                        setCategory(e.target.value)
                    }} />
                </div>

                <div className="create-item">
                    <label> Phone Number </label>
                    <input type="text" placeholder="0990 000 000" name="phonenumber" onChange={(e) => {
                        setPhonenumber(e.target.value)
                    }} />
                </div>
                <button className="create-button" onClick={submitAnnounce} > Create </button>

            </form>

        </div>
    )
}

export default Create;