function rot13(str) {
	const arr = [];
	let temp;
	for (let i = 0; i < str.length; i++) {
		if (str[i].match(/[A-Z]/)) {
			temp = str.charCodeAt(i) - 13;
			if (temp < 65) {
				temp += 26;
			}
			temp = String.fromCharCode(temp);
			arr.push(temp);
		} else {
			arr.push(str[i]);
		}
	}
	str = arr.join('');
	console.log(str);
	return str;
}

rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
