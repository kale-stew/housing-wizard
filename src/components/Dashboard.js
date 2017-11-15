import React, { Component } from 'react';
import './styles/Dashboard.css';
import { Header } from './Header';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        const { buttonStyle } = styles;

        return(
            <div className="dashboard-container">
                <Header />
                <div className="content-container">
                    <div className="add-new_btn">
                        <Link to="/wizard/1" style={buttonStyle}>Add New Property</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#8AEA92',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '18px',
        padding: '10px 15px 10px 15px',
        textDecoration: 'none'
    }
}