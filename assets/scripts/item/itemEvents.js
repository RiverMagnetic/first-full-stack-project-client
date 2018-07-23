'use strict'

const itemApi = require('./itemApi.js')
const itemUi = require('./itemUi.js')

const onGetItems = (event) => {
    event.preventDefault()
    itemApi.getItems()
        .then(itemUi.getItemsSuccess)
        .catch(itemUi.failure)
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
        .catch(itemUi.failure)
}

const addHandlers = () => {
    $('#getItemsButton').on('click', onGetItems)
    $('#clearItemsButton').on('click', onClearItems)
    $('.content').on('click', 'button', onDeleteItem)
}

module.exports = {
    addHandlers
}