function fibonacci(num) {
	let a = 0;
	let b = 1;

	while(num-- > 0) {
		let c = a+b;
		b = a;
		a = c;
	}

	return b;
}
alert(fibonacci(4));

module.exports = fibonacci;
