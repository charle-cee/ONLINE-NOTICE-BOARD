import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-items">
                <ul className="help-section"> 
                   Help
                    <li> Contact Us </li>
                    <li> Support </li>
                    <li> Privacy and Security </li>
                </ul>
            
                <ul className="management"> 
                   Management
                    <li> Student Login </li>
                    <li> Admin Login </li>
                    <li> ICT </li>
                </ul>

                <ul className="follow-us"> 
                   Follow Us On
                    <li> Twitter </li>
                    <li> Facebook </li>
                    <li> Instagram </li>
                </ul>
            </div>

            <div className="copyright"> University of Malawi Online Notice Board © 2021 </div>
        </footer>
    )
}

export default Footer;