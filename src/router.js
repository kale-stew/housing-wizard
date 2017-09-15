import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import Dashboard from './components/Dashboard/Dashboard';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

export default (
    <HashRouter>
        <div>
            <Route component={Landing} path exact='/'/>
            <Route component={Dashboard} path exact='/welcome'/>
            <Route component={WizardOne} path='/wizard/1'/>
            <Route component={WizardTwo} path='/wizard/2'/>
            <Route component={WizardThree} path='/wizard/3'/>
            <Route component={WizardFour} path='/wizard/4'/>
        </div>
    </HashRouter>
);

// routing! added /paths/