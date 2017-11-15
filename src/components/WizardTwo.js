// address input
// street, city, state, zip

import React, { Component } from 'react';
import { 
    updateStreet, 
    updateCity, 
    updateState, 
    updateZip 
} from '../ducks/reducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles/wizards.css';

class WizardTwo extends Component {
    render() {
        const { updateStreet, updateCity, updateState, updateZip } = this.props;
        const { cancelButton, inputHeader, nextButton} = styles;

        return(
            <div className="wizard_container">
            <div className="header_container">
                <div className="header_child">
                    <div className="header_left-container">
                        <img className="house-icon" src="logo.png" alt="logo"/>
                        <span className="houser-bold">Houser</span>
                        <span className="dashboard">Dashboard</span>
                    </div>
                    <div className="header_right-container"></div>
                </div>
            </div>
            <div className="wizard_step_container">
                <div className="wizard_subheader-container">
                    <h3>Add New Listing</h3>
                    <button style={cancelButton}>Cancel</button>
                </div>
                <div className="wizard_stepHighlight-container">
                    <span style={inputHeader}>Step 2</span>
                    <div className="highlight-container">
                        <img src="active.png" alt="step one"/>
                        <img src="active.png" alt="step two"/>
                        <img src="inactive.png" alt="inactive"/>
                        <img src="inactive.png" alt="inactive"/>
                    </div>
                </div>
                <div className="step_body-Container">
                    <div className="step2_input-container">
                        <h4 className="input-title" style={inputHeader}>Address</h4>
                        <input type="text" onChange={ (e)=> this.props.updateAddress(e.target.value) }/>
                        <h4 className="input-title" style={inputHeader}>City</h4>
                        <input type="text" onChange={ (e)=> this.props.updateCity(e.target.value) }/>
                        <h4 className="input-title" style={inputHeader}>State</h4>
                        <input type="text" onChange={ (e)=> this.props.updateState(e.target.value) }/>
                        <h4 className="input-title" style={inputHeader}>Zip</h4>
                        <input type="text" onChange={ (e)=> this.props.updateZip(e.target.value) }/>
                    </div>
                    <Link to="/wizard/3">
                        <button className="next-step_btn" style={nextButton}> Next</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    };
}

const styles = {
    cancelButton: {
        backgroundColor: '#FEC2C2',
        fontSize: '14px',
        padding: '6px 10px 6px 10px'
    },
    
    inputHeader: {
        fontSize: '20px',
        marginBottom: '6px'
    },

    nextButton: {
        backgroundColor: '#3B5249',
        color: 'white',
        fontSize: '14px',
        marginTop: '30px',
        padding: '9px 19px 9px 19px'
    }
}

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