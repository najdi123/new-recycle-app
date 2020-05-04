import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="./sell">
                فروش
            </Link>
            <br/>
            <Link to="./about">
                درباره
            </Link>
            <br/>
            <Link to="./admin">
                Admin
            </Link>
        </div>
    );
};

export default Navbar;