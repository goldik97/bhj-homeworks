let menuTitle = document.querySelector('.dropdown__value');
let menuLink = Array.from(document.querySelectorAll('.dropdown__link'));

function closeAndOpen() {
    let menuList = document.querySelector('.dropdown__list');
    menuList.classList.toggle('dropdown__list_active');
}

menuTitle.addEventListener('click', closeAndOpen);

menuLink.forEach(function(item) {
    item.onclick = function() {
        menuTitle.textContent = item.textContent;
        return false;
    };
    item.addEventListener('click', closeAndOpen);
})