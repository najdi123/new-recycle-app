import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory  } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Sell from './pages/Sell.js';
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sell" component={Sell}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/admin" component={Admin}/>
            </Switch>

        </Router>
    );
}

export default App;
