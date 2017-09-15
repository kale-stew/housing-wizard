import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
// import NextBtn from './components/NextBtn/NextBtn';
import { HashRouter, Route } from 'react-router-dom';

export default (
    <HashRouter>
        <div>
            {/* <Route component={NextBtn} path exact='/'/> */}
            <Route component={WizardOne} path='/wOne'/>
            <Route component={WizardTwo} path='/wTwo'/>
            <Route component={WizardThree} path='/wThree'/>
            <Route component={WizardFour} path='/wFour'/>
        </div>
    </HashRouter>
);