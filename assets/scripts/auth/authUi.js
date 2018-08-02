'use strict'

const store = require('../store')

const signUpSuccess = function () {
    $('#message').text('Signed up successfully')
    $('#message').css('background-color', 'green')
    $('#sign-up-modal').hide()
}

const signUpFailure = function () {
    $('#message').text('Incorrect email or password')
    $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
    $('#message').text("Check out my list!")
    $('#message').css('background-color', 'green')
    // console.log('signInSuccess ran. Data is :', data)
    store.user = data.user
    $('#logInModal').modal('hide')
    $('#sign-in-modal').hide()
    $('#sign-up-modal').hide()
    $('#items-view').show()
    $('#sign-out-modal').show()
    $('#change-password-modal').show()
}

const signInFailure = function () {
    $('#logInModal').modal('hide')
    $('#message').text('Incorrect Email or Password')
    $('#message').css('background-color', 'red')
}

const signOutSuccess = function () {
    $('#message').text('Signed out')
    $('#message').css('background-color', 'green')
    // console.log('signOutSuccess ran and nothing was returned!')
    store.user = null
    $('#sign-in-modal').show()
    $('#sign-up-modal').show()
    $('#items-view').hide()
    $('#sign-out-modal').hide()
    $('#change-password-modal').hide()
    $('#signOutModal').modal('hide')
}

const signOutFailure = function () {
    $('#message').text('Error on sign out')
    $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
    $('#message').text('Changed password successfully')
    $('#message').css('background-color', 'green')
    // console.log('changePasswordSuccess ran and nothing was returned!')
    $('#changePasswordModal').hide()
}

const changePasswordFailure = function () {
    $('#message').text('Incorrect old or new password')
    $('#message').css('background-color', 'red')
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    changePasswordSuccess,
    changePasswordFailure
}
