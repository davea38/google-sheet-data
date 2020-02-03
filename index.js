exports = module.exports = async ({ sheetId, format = 'json', sheetNumber = 0 }) => {
	let rp = null;

	// Get request-promise, if not throw an error
	try {
		rp = require('request-promise');
	} catch (err) {
		if (err instanceof Error && err.code === 'MODULE_NOT_FOUND') {
			throw new Error('Required module: require-promise was not found');
		} else {
			throw err;
		}
	}

	// Check required variables, default format to json
	if (!sheetId) {
		throw new Error('Required value: sheetId missing');
	}

	const googleSheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:${format}&tq&gid=${sheetNumber}`;
	const options = {
    url: googleSheetUrl,
    headers: {
      'X-DataSource-Auth': 'true',
    },
    transform: function(body) {
      return format === 'json' ? JSON.parse(body.replace(/^\)]\}'\n/, '')) : body;
    }
	};

	return await rp(options);
};
