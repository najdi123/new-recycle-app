import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="./sell">
              sell
            </Link>
            <br/>
            <Link to="./about">
               about
            </Link>
            <br/>
            <Link to="./admin">
                Admin
            </Link>
        </div>
    );
};

export default Navbar;