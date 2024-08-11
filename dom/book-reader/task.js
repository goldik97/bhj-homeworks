const fontSizes = Array.from(document.querySelectorAll('.font-size'));
let activeFontSize = document.querySelector('.font-size_active');

const book = document.querySelector('.book');

fontSizes.forEach(clickItem => {
    clickItem.addEventListener('click', function(event) {
        event.preventDefault();
        activeFontSize.classList.remove('font-size_active');
        activeFontSize = clickItem;
        activeFontSize.classList.add('font-size_active');

        if(activeFontSize.classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        }
        else if(activeFontSize.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');  
        }
        else {
            book.classList.remove('book_fs-big'); 
            book.classList.remove('book_fs-small');
        }
    });
});