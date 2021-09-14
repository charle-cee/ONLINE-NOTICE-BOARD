import React, {useState, useEffect} from 'react';
import './events.css';
import Axios from 'axios';





function Events() {

    const [eventpicture, setEventpicture] = useState("");
    const [eventdetails, setEventdetails] = useState("");
    const [eventList, setEventList] = useState([]);

    const submitEvent = () => {
        Axios.post("http://localhost:3001/api/events", {
            eventpicture: eventpicture,
            eventdetails: eventdetails,

        }).then(() => {
            alert("sucessful!");
        }); 
    };

    return (
    <div className="events"> 
      <h1 className="events-title">  Create Event </h1>
    
        <form className="events-form" >
            <div className="events-item">
                <label className="events-label"> Attach Picture / Video (Optional) </label>
                <input type="file" name="eventpicture" onChange={(e) => {
                        setEventpicture(e.target.value)
                    }}/>
            </div>


            <div className="events-item">
                <label className="events-label"> Enter Event Details </label>
                <textarea  className="event-textarea" cols="100" rows="25" name="eventdetails" onChange={(e) => {
                        setEventdetails(e.target.value)
                    }}/>
            </div>

            <button className="events-button" onClick={submitEvent} > Create </button>

        </form>
        
    </div>
)}

export default Events;