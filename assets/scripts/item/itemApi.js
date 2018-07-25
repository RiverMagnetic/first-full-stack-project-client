'use strict'

const config = require('../config')
const store = require('../store')

const getItems = function () {
    return $.ajax({
        url: config.apiUrl + '/items'
    })
}

const deleteItem = (itemId) => {
    return $.ajax({
        url: config.apiUrl + '/items/' + itemId,
        method: 'DELETE'
    })
}

const createItem = function (data) {
    return $.ajax({
        url: config.apiUrl + '/items',
        method: 'POST',
        headers: 'Token token = ' + store.user.token,
        data
    })
}

module.exports = {
    getItems,
    deleteItem,
    createItem
}