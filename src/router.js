import React from 'react';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import WizardThree from './components/WizardThree';
import WizardFour from './components/WizardFour';
import { HashRouter, Route } from 'react-router-dom';

export default (
    <HashRouter>
        <div>
            <Route component={Landing} exact path='/'/>
            <Route component={Dashboard} path='/welcome'/>
            <Route component={WizardOne} path='/wizard/1'/>
            <Route component={WizardTwo} path='/wizard/2'/>
            <Route component={WizardThree} path='/wizard/3'/>
            <Route component={WizardFour} path='/wizard/4'/>
        </div>
    </HashRouter>
);

// routing! added /paths/