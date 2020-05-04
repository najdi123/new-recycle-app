import React, {useReducer} from 'react';
import submitOrder from "../reducers/orders";
import Navbar from "../components/Navbar";
import {useSelector, useStore} from "react-redux";


const Admin = () => {
    // const [state, dispatch] = useReducer(submitOrder, []);
    // console.log('state')
    // console.log(state)

    // const counter = useSelector(state => state)
    // console.log(counter)

    const store = useStore();
    let b = store.getState();
    const consoleThis = e=>{
        // console.log('state')
        // console.log(state)
    }
    return (
        <div>
            {console.log(b)}
            <Navbar/>
            admin
            <button onClick={()=>consoleThis}>console</button>
        </div>
    );
};

export default Admin;