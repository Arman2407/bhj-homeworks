const items = document.querySelectorAll('.has-tooltip');

for (let item of items) {
    item.addEventListener('click', showHelper);

    const helper = `<div class="tooltip">${item.title}</div>`;
    item.insertAdjacentHTML('afterEnd', helper);
}

function showHelper(event) {

    event.preventDefault();

    const tooltip = document.querySelector('.tooltip_active');

    if (tooltip) {
        tooltip.classList.remove('tooltip_active');
    }

    event.target.nextSibling.classList.add('tooltip_active');
    
}