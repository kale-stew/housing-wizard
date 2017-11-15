// input for name, description

import React, { Component } from 'react';
import { updatePropName, updateDescription } from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/wizards.css';

class WizardOne extends Component {
    render() {
        console.log(this)
        const { updatePropName, updateDescription } = this.props;
        const { cancelButton, inputHeader, nextButton } = styles;

        return(
            <div className="wizard_container">
                <div className="wizard_step_container">
                    <div className="wizard_subheader-container">
                        <h3>Add New Listing</h3>
                        <button style={cancelButton}>Cancel</button>
                    </div>
                    <div className="wizard_stepHighlight-container">
                        <span style={inputHeader}>Step 1</span>
                        <div className="highlight-container">
                            <img src="active.png" alt="step one"/>
                            <img src="inactive.png" alt="inactive"/>
                            <img src="inactive.png" alt="inactive"/>
                            <img src="inactive.png" alt="inactive"/>
                        </div>
                    </div>
                    <div className="step_body-Container">
                        <div className="input-container">
                            <h4 style={inputHeader}>Property Name</h4>
                            <input type="text" onChange={ (e)=> this.props.updatePropName(e.target.value) }/>
                        </div>
                        <div className="input-container" style={{ marginTop: '15px' }}>
                            <h4 style={inputHeader}>Description</h4>
                            <textarea type="text" onChange={ (e)=> this.props.updateDescription(e.target.value) }></textarea>
                        </div>
                        <Link to="/wizard/2">
                            <button className="next-step_btn" style={nextButton}> Next Step </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
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
    const { propName, description } = state;
    return {
        propName,
        description
    };
}

export default connect(mapStateToProps, { updatePropName, updateDescription })(WizardOne); 