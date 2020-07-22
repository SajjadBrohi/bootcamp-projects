// 'use strict';

function hello() {
	console.log(this);
}

hello();

() => console.log(this);

const pin = function () {
	console.log(this); //undefined
	function pinner() {
		console.log(this);
	}
	console.log('pinner next');
	pinner(); //undefined
};

console.log('pin next');
pin();

const pin2 = () => {
	console.log(this);
};

const pin3 = () => console.log(this);

console.log('pin2 next');
pin2();

console.log('pin3 next');
pin3();
