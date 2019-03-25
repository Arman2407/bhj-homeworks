const items = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');

button.addEventListener('click', addFunc);

function addFunc(e) {
	e.preventDefault();
	const value = input.value;
	if(value != '') {
		item(value);
		input.value = '';
	}
	DeleteFunc();
}


function DeleteFunc(){
	const delButtons = document.querySelectorAll('.task__remove');
	for(let i = 0; i < delButtons.length; i++) {
		delButtons[i].addEventListener('click', (e) => {
			console.log(e.target)
			e.preventDefault();
			const parent = e.target.parentNode;
			console.log(parent)
			parent.style.display = 'none';
		});
	}
}



function item(text) {
	items.innerHTML += `<div class="task">
				              <div class="task__title">
				                ${text}
				              </div>
				              <a href="#" class="task__remove">&times;</a>
				            </div>`;

	DeleteFunc();
}