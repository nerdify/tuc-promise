const Tuc = require('tuc');

const tuc = new Tuc();

exports.getBalance = (number) => {
	return new Promise((resolve, reject) => {
		tuc.getBalance(number, (response) => {
			if (tuc.isError(response)) {
				return reject(response.error);
			}

			resolve(response);
		});
	});
}
