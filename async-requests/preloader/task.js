const items = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

xhr.onload = () => {
    for(let i in xhr.response.response.Valute) {
        const loader = document.querySelector('.loader');

        items.innerHTML += `<div class="item">
        <div class="item__code">
        ${xhr.response.response.Valute[i].CharCode}
        </div>
        <div class="item__value">
        ${xhr.response.response.Valute[i].Value}
        </div>
        <div class="item__currency">
        руб.
        </div>
        </div>`
    }

    loader.classList.remove('loader_active');
}

xhr.send();