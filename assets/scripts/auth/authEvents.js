const getFormFields = require('../../../lib/get-form-fields')

const authApi = require('./authApi')
const authUi = require('./authUi')
// Using your knowledge of jQuery write a function, 
// onSubmitForm or openModal, that console logs the input in the input field when "save changes" is clicked
// this will be referenced in index.js

const openModal = function (event) {
    event.preventDefault()
    // const data = getFormFields(event.target)
    // console.log(data)
    // console.log(data.form)
    $('#signUpModal').modal('hide')
    $('#logInModal').modal('hide')
    $('#changePasswordModal').modal('hide')
}
const onSignUp = function (event) {
    event.preventDefault()
    // console.log('sign up ran!')
    const data = getFormFields(this)
    authApi.signUp(data)
        .then(authUi.signUpSuccess)
        .catch(authUi.signUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault()
    // console.log('sign in ran!')
    const data = getFormFields(this)
    authApi.signIn(data)
        .then(authUi.signInSuccess)
        .catch(authUi.signInFailure)
}

const onSignOut = function (event) {
    event.preventDefault()
    // console.log('sign out ran')
    authApi.signOut()
        .then(authUi.signOutSuccess)
        .catch(authUi.signOutFailure)
}

const onChangePassword = function (event) {
    event.preventDefault()
    // console.log('change password ran!')

    const data = getFormFields(this)
    authApi.changePassword(data)
        .then(authUi.changePasswordSuccess)
        .catch(authUi.changePasswordFailure)
}

const addHandlers = () => {
    $('#sign-up').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)
    $('#sign-out').on('submit', onSignOut)
    $('#change-password').on('submit', onChangePassword)
}

module.exports = {
    openModal,
    addHandlers
}