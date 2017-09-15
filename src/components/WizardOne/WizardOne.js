// input for name, description

import React, { Component } from 'react';
import { updatePropName, updateDescription } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class WizardOne extends Component {
    render() {
        const { updatePropName, updateDescription } = this.props;

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
                        <span>Step 1</span>
                        <div className="highlight-container">
                            <img src="active.png" alt="step one"/>
                            <img src="inactive.png" alt="inactive"/>
                            <img src="inactive.png" alt="inactive"/>
                            <img src="inactive.png" alt="inactive"/>
                        </div>
                    </div>
                    <div className="step_body-Container">
                        <div className="step1_name-container">
                            <span>Property Name</span>
                            <input/>
                        </div>
                        <div className="step1_descrip-container">
                            <span>Description</span>
                            <textarea></textarea>
                        </div>
                        <Link to="/wizard/2"><button className="next-step_btn"> Next </button></Link>
                    </div>
                </div>
            </div>
        );
    };
}