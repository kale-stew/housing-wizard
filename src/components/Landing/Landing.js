// auth page
// login or register

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Landing extends Component {
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
                        <Link to="/welcome">
                            <button className="register-btn">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}