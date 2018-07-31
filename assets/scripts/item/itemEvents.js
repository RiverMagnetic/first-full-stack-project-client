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
        .then(itemUi.onDeleteItemSuccess)
        .then(() => onClearItems(event))
        .then(() => onGetItems(event))
        .catch(itemUi.onError)
}

const onUpdateItem = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log('running onUpdateItem')
    const item = data.item
    console.log(item)
    if (item.id === '') {
        $('#message').html('Id is required')
        $('#message').css('background - color', 'red')
        return false
    }
    if (item.id.length !== 0) {
        console.log(item.id.length)
        itemApi.updateItem(data)
            .then(itemUi.onUpdateSuccess)
            .catch(itemUi.onError)
    } else {
        console.log('Please provide a item id!')
    }
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