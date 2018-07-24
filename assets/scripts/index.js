'use strict'

const authEvents = require('./auth/authEvents')
const itemEvents = require('./item/itemEvents')



// on document ready
$(() => {

  $('#items-view').hide()
  $('#change-password-modal').hide()
  $('#sign-out-modal').hide()
  
  // function to hold event handlers
  const addHandlers = () => {
    $('#list-view').on('submit', function (event) {
      event.preventDefault()
    })
  }
  // call the addHandlers function that was just defined
  addHandlers()

  authEvents.addHandlers()
  itemEvents.addHandlers()
  $('#sign-up').on('submit', authEvents.openModal)
  $('#change-password').on('submit', authEvents.openModal)
})