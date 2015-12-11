var prompt = require('syncoprompt')
var yn = require('yn')

module.exports = positive

function positive(question, defaultAnswer) {
  return yn(
    prompt(question) || 
    (typeof defaultAnswer === 'boolean' ? defaultAnswer : true)
  )
}