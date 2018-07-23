'use strict'

// const game = require('./game')
const authEvents = require('./auth/authEvents')
const itemEvents = require('./item/itemEvents')



// on document ready
$(() => {

  // $('#game-board').hide()
  $('#change-password-modal').hide()
  $('#sign-out-modal').hide()
  $('#list-view').hide()

  // function to hold event handlers
  const addHandlers = () => {
  //   $('.cell').on('click', function (event) {
  //     event.preventDefault()
  //     game.mark(event.target.id)
  //   })
    $('#list-view').on('submit', function (event) {
      event.preventDefault()
      // game.createGame(event)
    })
  }
  // call the addHandlers function that was just defined
  addHandlers()

  authEvents.addHandlers()
  itemEvents.addHandlers()
  $('#sign-up').on('submit', authEvents.openModal)
  $('#change-password').on('submit', authEvents.openModal)
})