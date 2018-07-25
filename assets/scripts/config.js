'use strict'

let apiUrl
const apiUrls = {
  // TODO: add production URL
  production: 'https://api-list-project.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
