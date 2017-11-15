// input for name, description

import React, { Component } from 'react';
import { updatePropName, updateDescription } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../wizards.css';

class WizardOne extends Component {
    render() {
        console.log(this)
        const { updatePropName, updateDescription } = this.props;

        return(
            <div className="wizard_container">
                <div className="header_container">
                    <div className="header_child">
                        <div className="header_left_container">
                            <img className="house-icon" src="logo.png" alt="icon"/>
                            <span className="houser-bold">Houser</span>
                            <span className="dashboard">Dashboard</span>
                        </div>
                        <div className="header_right_container">
                        </div>
                    </div>
                </div>
                <div className="wizard_step_container">
                    <div className="wizard_subheader-container">
                        <span style={{ alignSelf: 'center' }}>Add New Listing</span>
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
                        <div className="step2_input-container">
                            <span className="input-title">Property Name</span>
                            <input type="text" onChange={ (e)=> this.props.updatePropName(e.target.value) }/>
                        </div>
                        <div className="step2_input-container" style={{ marginTop: '15px' }}>
                            <span className="input-title">Description</span>
                            <textarea type="text" onChange={ (e)=> this.props.updateDescription(e.target.value) }></textarea>
                        </div>
                        <Link to="/wizard/2">
                            <button className="next-step_btn" style={{ marginTop: '15px' }}> Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    const { propName, description } = state;
    return {
        propName,
        description
    };
}

export default connect(mapStateToProps, { updatePropName, updateDescription })(WizardOne); 