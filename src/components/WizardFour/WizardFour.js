// desired rent paid by a tenant

import React, { Component } from 'react';
import { updateDesiredRent } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class WizardFour extends Component {
    render() {
        const { updateDesiredRent } = this.props;

        return(
            <div className="wizard_container">
            <div className="header_container">
                <div className="header_child">
                    <div className="header_left_container">
                        <img src="icon.png" alt="logo"/>
                        <span className="houser-bold">Houser</span>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="header_right_container"></div>
                </div>
            </div>
            <div className="wizard_step_container">
                <div className="wiard_subheader-container">
                    <span>Add New Listing</span>
                    <button>Cancel</button>
                </div>
                <div className="wizard_stepHighlight-container">
                    <span>Step 4</span>
                    <div className="highlight-container">
                        <img src="active.png" alt="step one"/>
                        <img src="active.png" alt="step two"/>
                        <img src="active.png" alt="step three"/>
                        <img src="active.png" alt="final step"/>
                    </div>
                </div>
                <div className="step_body-Container">
                    <div>
                        <span></span>
                        <input/>
                    </div>
                    <Link to="/dashboard"><button className="next-step_btn">Finish Listing</button></Link>
                </div>
            </div>
        </div>
        )
    }
};