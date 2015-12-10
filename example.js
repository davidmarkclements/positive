var confirm = require('./')

var sure = confirm('Are you sure? [y/N] ', false)

console.log(sure ? 'excellent.' : 'oh')