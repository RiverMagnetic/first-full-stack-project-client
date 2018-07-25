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

// This success function is for any successes, not tied to specific requests
const onSuccess = function (response) {
    console.log('successful response is', response)
}

// This failure function is for any errors, not tied to specific requests
const onError = function (error) {
    console.error('error is ', error)
}

module.exports = {
    getItemsSuccess,
    clearItems,
    onSuccess,
    onError
}