var prompt = require('prompt-sync').prompt
var yn = require('yn')

module.exports = positive

function positive(question, defaultAnswer) {

  //waiting for https://github.com/0xxff/prompt-sync/pull/7 to land
  var y = prompt({value: question, echo: ''}).replace(question, '')

  //remove when https://github.com/0xxff/prompt-sync/pull/5 lands
  if (y === null) { process.exit(130) }

  return yn(y || defaultAnswer || true)

}