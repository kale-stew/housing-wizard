const initialState = {
    name: '',
    description: '',
    street: '',
    city: '',
    state: '',
    zip: 0,
    loanAmount: 0,
    monthlyMort: 0,
    desiredRent: 0
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_DESCRIPTION = "UPDATE DESCRIPTION";
const UPDATE_STREET = "UPDATE_STREET";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_LOAN_AMOUNT = "UPDATE_LOAN_AMOUNT";
const UPDATE_MONTHLY_MORT = "UPDATE_MONTHLY_MORT";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";



export default reducer;