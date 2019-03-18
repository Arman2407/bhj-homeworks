const book = document.querySelector('.book');
const controlers = document.querySelector('.book__control');

for (let controler of controlers.children) {
    controler.addEventListener('click', change)
}

function change(event) {
    event.preventDefault();
    if (event.target.dataset.size === 'big') {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
    } else if (event.target.dataset.size === 'small') {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
    }

    for (let fontSize of document.querySelectorAll('.font-size')) {
        fontSize.classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
}