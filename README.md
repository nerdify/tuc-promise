# tuc-promise

> Wrapper for [tuc](https://github.com/nodenica/node-tuc) that returns a promise

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Install

```
$ npm install --save tuc-promise
```

## Usage

```js
const tuc = require('tuc-promise');

tuc.getBalance('01358336')
	.then((balance) => {
		console.log(balance);
	})
	.catch((err) => {
		console.log('err: ', err);
	});
```

## License

MIT © [Hosmel Quintana](https://hosmelq.com)
