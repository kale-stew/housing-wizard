# Houser Wizard

## Overview

This project was designed to replicate what we might receive on the job. There were no guided instructions on what we needed to do and we were only provided with [design specifications and technical requirements](https://github.com/DevMountain/simulation-2). We also received no mentor help. This project was a chance for us to combine and showcase the skills we've learned so far. 

## Tech Stack
- `express` is used to communicate with our db
- `massive` is used to establish a connection with our db
- `express.static` is used to serve production-ready front-end files
- auth middleware should be used to ensure a user is logged in
- `express sessions` should be used to track logged in users
- `redux` is used to map state across the wizard and internal views

## Technical Requirements
- As a user, I can login to my or register a new account.
- As a user, I can view a listing of all of my own properties.
- As a user, I can filter my properties by "desired rent".
- As a user, I can reset the applied filters.
- As a user, I can add a new property to the system, using the Wizard View.
- As a user, I can logout and be navigated back to the Auth View. 
- As a user of the wizard, I should be able to see which step I'm on and how many I have remaining.
- As a user of the wizard, my input should be remembered across all steps.
- As a user of the wizard, I should be able to logout at any stage.
- As a user of the wizard, I should be able to successfully manipulate properties in the database.

## Current Status

Complete | Pending
-------- | -------
store | redux
component structure | auth middleware
CSS | |
router | |

![current](https://github.com/kale-stew/housing-wizard/blob/master/assets/current.gif)

