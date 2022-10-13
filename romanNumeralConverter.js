function convertToRoman(num) {
	const obj = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	let str = '';
	let rem = 10;
	let x;

	let arr = Object.keys(obj);
	while (rem > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (obj[arr[i]] <= num) {
				x = Math.trunc(num / obj[arr[i]]);
				rem = num % obj[arr[i]];
				for (let j = 0; j < x; j++) {
					str += arr[i];
				}
				num = rem;
				break;
			}
		}
	}
	console.log(str);
	return str;
	return num;
}

convertToRoman(36);
