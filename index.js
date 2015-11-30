var prompt = require('prompt-sync').prompt
var yn = require('yn')

module.exports = positive

function positive(question, defaultAnswer) {

  //remove when https://github.com/0xxff/prompt-sync/pull/6 lands
  var wasRaw = process.stdin.isRaw

  //change value to ask when https://github.com/0xxff/prompt-sync/pull/7 lands
  var y = prompt({value: question, echo: ''})

  //remove when https://github.com/0xxff/prompt-sync/pull/6 lands
  process.stdin.setRawMode(wasRaw)

  //remove when https://github.com/0xxff/prompt-sync/pull/5 lands
  if (y === null) { process.exit(130) }

  //remove replace when https://github.com/0xxff/prompt-sync/pull/7 lands
  return yn(y.replace(question, '') || defaultAnswer || true)

}