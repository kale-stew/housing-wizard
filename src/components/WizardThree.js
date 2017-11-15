// loan amount obtained
// monthly mortgage being paid 

import React, { Component } from 'react';
import { updateLoanAmount, updateMonthlyMort } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/wizards.css';

class WizardThree extends Component {
    render() {
        const { updateLoanAmount, updateMonthlyMort } = this.props;
        const { cancelButton, inputHeader, nextButton} = styles;

        return(
            <div className="wizard_container">
                <div className="wizard_step_container">
                    <div className="wizard_subheader-container">
                        <h3>Add New Listing</h3>
                        <button style={cancelButton}>Cancel</button>
                    </div>
                    <div className="wizard_stepHighlight-container">
                        <span style={inputHeader}>Step 3</span>
                        <div className="highlight-container">
                            <img src="complete.png" alt="step one"/>
                            <img src="complete.png" alt="step two"/>
                            <img src="active.png" alt="step three"/>
                            <img src="inactive.png" alt="inactive"/>
                        </div>
                    </div>
                    <div className="step_body-Container">
                        <div className="input-container">
                            <h4 style={inputHeader}>Loan Amount</h4>
                            <input type="text" onChange={ (e)=> this.props.updateLoanAmount(e.target.value) }/>
                        </div>
                        <div className="input-container" style={{ marginTop: '15px' }}>
                            <h4 style={inputHeader}>Monthly Mortgage</h4>
                            <input type="text" onChange={ (e)=> this.props.updateMonthlyMort(e.target.value) }/>
                        </div>
                        <Link to="/wizard/4">
                            <button className="next-step_btn" style={nextButton}> Next</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    cancelButton: {
        backgroundColor: '#FEC2C2',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        padding: '6px 10px 6px 10px'
    },
    
    inputHeader: {
        fontSize: '20px',
        marginBottom: '6px'
    },

    nextButton: {
        backgroundColor: '#3B5249',
        color: 'white',
        border: 'none',
        fontSize: '15px',
        marginTop: '30px',
        padding: '9px 18px 9px 18px'
    }
}

function mapStateToProps(state) {
    const { loanAmount, monthlyMort } = state;
    return {
        loanAmount,
        monthlyMort
    };
}

export default connect(mapStateToProps, { updateLoanAmount, updateMonthlyMort })(WizardThree); 