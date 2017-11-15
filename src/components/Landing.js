// auth page
// login or register

import React, { Component } from 'react';
import './styles/Landing.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Landing extends Component {
    render() {
        const { inputHeader } = styles;
        return(
            <div className="landing-container">
                <div className="landing-content">
                <img src="Houser.png" alt="welcome to Houser"/>
                    <div className="input-container">
                        <h4 style={inputHeader}>Username</h4>
                        <input type="text"/>
                        <h4 style={inputHeader}>Password</h4>
                        <input type="text"/>
                    </div>
                    <div className="button-container">
                        <Link to="/welcome" className="login-btn">Login</Link>
                        <Link to="/welcome" className="register-btn">Register</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    inputHeader: {
        fontSize: '20px',
        marginBottom: '6px'
    }
}