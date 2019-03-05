const image = document.getElementById("cookie");

let bigSize = 200;
let smallSize = 150;

function changeSizes() {
	const counter = document.getElementById("clicker__counter");
	counter.textContent++ + 1;

	if (image.width == bigSize) {
		image.width = smallSize;
	} else {
		image.width = bigSize;
	}
}

image.onclick = changeSizes;