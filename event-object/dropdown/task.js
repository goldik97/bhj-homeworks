let menuTitle = document.querySelector('.dropdown__value');
let menuLink = Array.from(document.querySelectorAll('.dropdown__link'));

function closeAndOpen() {
    let menuList = document.querySelector('.dropdown__list');
    if(menuList.classList.contains('dropdown__list_active')) {
        menuList.classList.remove('dropdown__list_active')
    }
    else {
        menuList.classList.add('dropdown__list_active');
    }
}

menuTitle.addEventListener('click', closeAndOpen);

menuLink.forEach(function(item) {
    item.onclick = function() {
        menuTitle.textContent = item.textContent;
        return false;
    };
    item.addEventListener('click', closeAndOpen);
})