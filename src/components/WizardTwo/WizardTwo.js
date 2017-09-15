// address input
// street, city, state, zip

import React, { Component } from 'react';
import { updateStreet, updateCity, updateState, updateZip } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../wizards.css';

class WizardTwo extends Component {
    render() {
        const { updateStreet, updateCity, updateState, updateZip } = this.props;

        return(
            <div className="wizard_container">
            <div className="header_container">
                <div className="header_child">
                    <div className="header_left-container">
                        <img src="icon.png" alt="logo"/>
                        <span className="houser-bold">Houser</span>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="header_right-container"></div>
                </div>
            </div>
            <div className="wizard_step_container">
                <div className="wiard_subheader-container">
                    <span>Add New Listing</span>
                    <button>Cancel</button>
                </div>
                <div className="wizard_stepHighlight-container">
                    <span>Step 2</span>
                    <div className="highlight-container">
                        <img src="active.png" alt="step one"/>
                        <img src="active.png" alt="step two"/>
                        <img src="inactive.png" alt="inactive"/>
                        <img src="inactive.png" alt="inactive"/>
                    </div>
                </div>
                <div className="step_body-Container">
                    <div className="step2_input-container">
                        <span className="input-title" >Address</span>
                        <input type="text" onChange={ (e)=> this.props.updateAddress(e.target.value) }/>
                        <span className="input-titlei">City</span>
                        <input type="text" onChange={ (e)=> this.props.updateCity(e.target.value) }/>
                        <span className="input-title">State</span>
                        <input type="text" onChange={ (e)=> this.props.updateState(e.target.value) }/>
                        <span className="input-title">Zip</span>
                        <input type="text" onChange={ (e)=> this.props.updateZip(e.target.value) }/>
                    </div>
                    <Link to="/wizard/3">
                        <button className="next-step_btn"> Next</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    };
};

function mapStateToProps(state) {
    const { street, city, USstate, zip } = state;
    return {
        street,
        city,
        USstate,
        zip
    };
}

export default connect(mapStateToProps, { updateStreet, updateCity, updateState, updateZip })(WizardTwo); 