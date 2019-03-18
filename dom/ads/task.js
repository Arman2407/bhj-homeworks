const repeaters = document.querySelectorAll('.rotator');

setInterval(function () {
	for (let repeater of repeaters) {
		const id = random(0, repeater.children.length - 1);

		for (let item of repeater.children) {
			item.classList.remove('rotator__case_active');
			repeater.children[id].classList.add('rotator__case_active');
		}
	}
}, 1000);

function random(min, max) {
    return min + Math.round(Math.random() * (max - min));
}