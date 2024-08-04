const tabs = Array.from(document.querySelectorAll('.tab'));
let activeTab = document.querySelector('.tab_active');

const contents = Array.from(document.querySelectorAll('.tab__content'));
let activeContent = document.querySelector('.tab__content_active');

tabs.forEach(clickTab => {
    clickTab.addEventListener('click', () => {
    let index = tabs.indexOf(clickTab);

activeTab.classList.remove('tab_active');
activeTab = clickTab;
activeTab.classList.add('tab_active');

activeContent.classList.remove('tab__content_active');
activeContent = contents[index];
activeContent.classList.add('tab__content_active')
    })
})