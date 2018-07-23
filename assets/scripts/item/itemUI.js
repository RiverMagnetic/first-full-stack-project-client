'use strict'
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
// This failure function is for any errors, not tied to specific requests
const failure = (error) => {
    console.error(error)
}

module.exports = {
    getItemsSuccess,
    clearItems,
    failure
}