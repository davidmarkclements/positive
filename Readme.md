# positive

A yes/no question prompt.

## API

```
require('positive') => (question = '', defaultAnswer = true) => Boolean
```

## Usage

```js
var confirm = require('positive')

var sure = confirm('Are you sure? [y/N] ', false)

console.log(sure ? 'excellent.' : 'oh')
```

## About

Combines [`syncoprompt`][] and [`yn`][]. 

[`yn`][] is a simple module that determines a yes/no answer.

## Synchronous by Design

`positive` is synchronous on purpose - in a CLI like environment there's
little need for a prompt to be asynchronous (unless we wanted to do
something in the background, in which case `positive` doesn't match your
requirements). 

## Credit

* Sponsored by nearForm

[`syncoprompt`]: http://npmjs.com/syncoprompt
[`yn`]: http://npmjs.com/yn