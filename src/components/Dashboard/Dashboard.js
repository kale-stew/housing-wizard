// display available properties
// filter feature

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return(
            <div className="header_container">
                <div className="header_child">
                    <div className="header_left_container">
                        <img src="icon.png" alt="logo"/>
                        <span className="houser-bold">Houser</span>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="header_right_container">
                        <Link to exact="/">
                            <button className="register-btn">Logout</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}