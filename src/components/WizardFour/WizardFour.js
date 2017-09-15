// desired rent paid by a tenant

import React, { Component } from 'react';

export default class WizardFour extends Component {
    render() {
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
                    <button className="next_btn">Finish Listing</button>
                </div>
            </div>
        </div>
        )
    }
};