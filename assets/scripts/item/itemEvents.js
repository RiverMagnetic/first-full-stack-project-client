'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const itemApi = require('./itemApi.js')
const itemUi = require('./itemUi.js')

const onGetItems = (event) => {
    event.preventDefault()
    Promise.resolve(itemUi.clearItems)
        .then(itemApi.getItems)
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
        .then(itemUi.onDeleteItemSuccess)
        .then(() => onClearItems(event))
        .then(() => onGetItems(event))
        .catch(itemUi.onError)
}

const onUpdateItem = function (event) {
    event.preventDefault()
    console.log('running onUpdateItem')
    const data = getFormFields(event.target)
    const item = data.item
    if (item.id.length !== 0) {
        // console.log(item.id.length)
        // console.log(data)
        itemApi.updateItem(data)
            .then(itemUi.onUpdateItemSuccess)
            .then(() => onClearItems(event))
            .then(() => onGetItems(event))
            .catch(itemUi.onError)
    } else {
        $('#message').html('Please provide an item id!')
        $('#message').css('background-color', 'red')
        console.log('Please provide an item id!')
    }
    $('#update-item').trigger('reset')
    //  the native way to do this would be: document.querySelector('#update-item').reset()
}

const onCreateItem = function (event) {
    event.preventDefault()
    console.log('got to onCreateItem!')
    const data = getFormFields(event.target)
    console.log(data)
    // API call
    itemApi.createItem(data)
        .then(() => onClearItems(event))
        .then(() => onGetItems(event))
        .then(itemUi.onCreateItemSuccess)
        .fail(itemUi.onError)
    $('#create-item').trigger('reset')
}
const addHandlers = () => {
    $('#getItemsButton').on('click', onGetItems)
    $('#clearItemsButton').on('click', onClearItems)
    $('.content').on('click', 'button', onDeleteItem)
    $('#create-item').on('submit', onCreateItem)
    $('#update-item').on('submit', onUpdateItem)
}

module.exports = {
    addHandlers
}