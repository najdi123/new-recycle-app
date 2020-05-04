import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <div className="App">
                <p>
                    کاغذ و پلاستیک و فلزات دور ریز حود را بفروشید
                </p>

                <Navbar/>

            </div>
        </div>
    );
};

export default Home;