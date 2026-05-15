
const ExpectedErrorMessages = {
    noErrorMessage: 'No Error'
}

const RegistrationPageExpectedErrorMessages = {
    firstnameErrorMessage: 'First name is required.',
    lastnameErrorMessage: 'Last name is required.',
    emailErrorMessage: 'Email is required.',
    passwordErrorMessage: 'Password is required.',
    confirmPasswordErrorMessage: 'Password is required.',
    mismatchPasswordErrorMessage: 'The password and confirmation password do not match.',
    invalidEmailErrorMessage: 'Wrong email',
    invalidPasswordLengthErrorMessage: 'must have at least 6 characters',
    alreadyRegisteredErrorMessage: 'The specified email already exists'
}

const LoginPageExpectedErrorMessages = {
    invalidCredentialsErrorMessage: 'The credentials provided are incorrect',
    invalidEmailErrorMessage:'Please enter your email',
    noCustomerEmailErrorMessage: 'No customer account found',
    incorrectEmailErrorMessage : 'Wrong email'
}

export const anyPageErrorList = ExpectedErrorMessages;
export const registrationPageErrorList = RegistrationPageExpectedErrorMessages;
export const loginPageErrorList = LoginPageExpectedErrorMessages;
