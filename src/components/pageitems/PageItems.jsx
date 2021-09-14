import React from 'react';
import { Link } from 'react-router-dom';

function PageItems () {
   
        return (
        <div>
            <Link to="/login" className="link">
            <h3> Login </h3>
            </Link>

            <Link to="register" className="link">
            <h3> Register </h3>
            </Link>

        </div>
        )
    
}

export default PageItems;