function checkCashRegister(price, cash, cid) {
	const obj = {
		'ONE HUNDRED': 100,
		TWENTY: 20,
		TEN: 10,
		FIVE: 5,
		ONE: 1,
		QUARTER: 0.25,
		DIME: 0.1,
		NICKEL: 0.05,
		PENNY: 0.01,
	};
	let final = {
		status: '',
		change: [],
	};
	let num = cash - price;
	let original = num;
	let counter = 0;
	let temp = 0;
	let finalNum;
	let total = 0;
	for (let i = cid.length - 1; i > -1; i--) {
		if (num >= obj[cid[i][0]] && cid[i][1] !== 0) {
			if (num < cid[i][1]) {
				while (num >= obj[cid[i][0]]) {
					num -= obj[cid[i][0]];
					num = parseFloat(num.toFixed(2));
					temp += obj[cid[i][0]];
				}
				num = parseFloat(num.toFixed(2));
				finalNum = parseFloat(temp.toFixed(2));
				temp = 0;
			} else if (num >= cid[i][1] && cid[i][1] !== 0) {
				finalNum = cid[i][1];
				num -= cid[i][1];
				num = parseFloat(num.toFixed(2));
			}
			total += finalNum;
			total = parseFloat(total.toFixed(2));
			counter += 1;
			if (counter === 1 && cid[i][1] === original) {
				final.status = 'CLOSED';
				for (let i = 0; i < cid.length; i++) {
					if (cid[i][1] === 0) {
						final.change.push(cid[i]);
					}
				}
				final.change.unshift([cid[i][0], finalNum]);
			} else {
				final.status = 'OPEN';
				final.change.push([cid[i][0], finalNum]);
			}
		}
	}
	if (total !== original) {
		final.status = 'INSUFFICIENT_FUNDS';
		final.change = [];
	}
	console.log(final);
	return final;
}

checkCashRegister(3.26, 100, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100],
]);
