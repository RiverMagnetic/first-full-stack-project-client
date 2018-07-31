'use strict'

// const store = require('../store')

// this line connects my js to my handlebars
const showItemsTemplate = require('../templates/item-listing.handlebars')

const getItemsSuccess = (data) => {
    console.log(data)
    const showItemsHtml = showItemsTemplate({ items: data.items })
    
    $('.content').append(showItemsHtml)
}

const clearItems = () => {
    $('.content').empty()
}

// const resetForm = () => {
//     $('#update-item').trigger('reset')
//     //  the native way to do this would be: document.querySelector('#update-item').reset()
// }

const onCreateItemSuccess = function () {
    $('#message').text(`Item added!`)
    $('#message').css('background-color', 'green')
    $('#create-item').trigger('reset')
}

const onDeleteItemSuccess = function () {
    $('#message').text(`Item deleted!`)
    $('#message').css('background-color', 'green')
}

const onUpdateItemSuccess = function () {
    $('#message').text(`Item updated!`)
    $('#message').css('background-color', 'green')
    $('#update-item').trigger('reset')
}

// This failure function is for any errors, not tied to specific requests
const onError = function (error) {
    console.error('error is ', error)
}

module.exports = {
    onCreateItemSuccess,
    getItemsSuccess,
    clearItems,
    // resetForm,
    onDeleteItemSuccess,
    onUpdateItemSuccess,
    onError
}
