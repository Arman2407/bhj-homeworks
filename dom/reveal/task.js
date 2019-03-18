const block = document.querySelectorAll('.reveal');

document.addEventListener('scroll', scrolled);

function scrolled (event) {
	const viewportHeight = window.innerHeight;

	for (let element of block) {
		const elementTop = element.getBoundingClientRect().top;
		if (elementTop < viewportHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
	}
};