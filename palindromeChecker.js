'use strict';

function palindrome(str) {
	str = str.toLowerCase();
	let regex = /[^a-z0-9]/g;
	str = str.replace(regex, '');
	const newStr = str
		.split('')
		.reverse()
		.join('');
	// console.log(str)
	// console.log(newStr)
	return str === newStr;
}

palindrome('eye');
palindrome('2_A3*3#A2');
