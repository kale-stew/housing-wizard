import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import house from '../logo.png';

export const Header = () => {
    return (
        <div className="header_container">
            <div className="header_child">
                <div className="items-container">
                    <img className="house-icon" src={house} alt="icon"/>
                    <span className="houser-bold">Houser</span>
                    <span className="dashboard">Dashboard</span>
                </div>
                <Link to="/" className="logout-btn">Logout</Link>
            </div>
        </div>
    )
};