'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const itemApi = require('./itemApi.js')
const itemUi = require('./itemUi.js')

const onGetItems = (event) => {
    event.preventDefault()
    itemApi.getItems()
        .then(itemUi.getItemsSuccess)
        .catch(itemUi.onError)
}

const onClearItems = (event) => {
    event.preventDefault()
    itemUi.clearItems()
}

const onDeleteItem = (event) => {
    event.preventDefault()
    const itemId = $(event.target).closest('ul').attr('data-id')
    itemApi.deleteItem(itemId)
        // may need refactoring
        .then(() => onGetItems(event))
        .catch(itemUi.onError)
}
const onCreateItem = function (event) {
    event.preventDefault()
    console.log('got to onCreateItem!')
    const data = getFormFields(event.target)
    console.log(data)
    // API call
    itemApi.createItem(data)
        .then(itemUi.onSuccess)
        .fail(itemUi.onError)
}
const addHandlers = () => {
    $('#getItemsButton').on('click', onGetItems)
    $('#clearItemsButton').on('click', onClearItems)
    $('.content').on('click', 'button', onDeleteItem)
    $('#create-item').on('submit', onCreateItem)
}

module.exports = {
    addHandlers
}