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

Combines [`prompt-sync`][] and [`yn`][]. 

[`yn`][] is a simple module that determines a yes/no answer.

[`prompt-sync`][] is an outstanding module that provides synchronous
CLI interaction without using a native module - very elegant. 

If you're looking for something that gives more than y/n answer
functionality, try `prompt-sync`.

## Synchronous by Design

`positive` is synchronous on purpose - in a CLI like environment there's
little need for a prompt to be asynchronous (unless we wanted to do
something in the background, in which case `positive` doesn't match your
requirements). 

## Credit

* Sponsored by nearForm

[`prompt-sync`]: http://npmjs.com/prompt-sync
[`yn`]: http://npmjs.com/yn