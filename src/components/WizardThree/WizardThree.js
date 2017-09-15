// loan amount obtained
// monthly mortgage being paid 

import React, { Component } from 'react';
import { updateLoanAmount, updateMonthlyMort } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../wizards.css';

class WizardThree extends Component {
    render() {
        const { updateLoanAmount, updateMonthlyMort } = this.props;

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
                    <span>Step 3</span>
                    <div className="highlight-container">
                        <img src="active.png" alt="step one"/>
                        <img src="active.png" alt="step two"/>
                        <img src="active.png" alt="step three"/>
                        <img src="inactive.png" alt="inactive"/>
                    </div>
                </div>
                <div className="step_body-Container">
                    <div>
                        <span>Loan Amount</span>
                        <input type="text" onChange={ (e)=> this.props.updateLoanAmount(e.target.value) }/>
                    </div>
                    <div>
                        <span>Monthly Mortgage</span>
                        <input type="text" onChange={ (e)=> this.props.updateMonthlyMort(e.target.value) }/>
                    </div>
                    <Link to="/wizard/4">
                        <button className="next-step_btn"> Next</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
};

function mapStateToProps(state) {
    const { loanAmount, monthlyMort } = state;
    return {
        loanAmount,
        monthlyMort
    };
}

export default connect(mapStateToProps, { updateLoanAmount, updateMonthlyMort })(WizardThree); 