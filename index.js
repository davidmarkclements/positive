var prompt = require('syncoprompt')
var yn = require('yn')

module.exports = positive

function positive(question, defaultAnswer) {
  return yn(prompt(question) || defaultAnswer || true)
}