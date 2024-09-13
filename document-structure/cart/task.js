const cart = document.querySelector('.cart__products');
const buttonValue = document.querySelectorAll('.product__quantity-control');
const buttonAdd = document.querySelectorAll('.product__add');

for(let item of buttonValue) {
    item.addEventListener('click', changeValue)
};

for (let item of buttonAdd) {
    item.addEventListener('click', addToCart)
};

function changeValue(event) {
    let value = event.target.parentNode.querySelector('.product__quantity-value');
    let count = +value.innerText;

    if(event.target.classList.contains('product__quantity-control_inc')) {
        count++;
        value.innerText = count;
    }
    else if(count > 1) {
        count--;
        value.innerText = count;
    }
}


function addToCart(event) {
    const cards = Array.from(cart.querySelectorAll('.cart__product'))
    const product = event.target.closest('.product');
    const id = product.dataset.id;
    const countForProduct = +event.target.parentNode.querySelector('.product__quantity-value').innerText;
    const productInCard = cards.find((elem => elem.dataset.id === id));

    if(productInCard) {
        let totalCount = Number(productInCard.querySelector('.cart__product-count').innerText) + countForProduct;
        productInCard.querySelector('.cart__product-count').innerText = totalCount;
    } else {const productImg = product.querySelector('.product__image').getAttribute('src');
        const count = product.querySelector('.product__quantity-value').innerText;
    
        cart.innerHTML += `<div class="cart__product" data-id="${id}">
                               <img class="cart__product-image" src="${productImg}">
                               <div class="cart__product-count">${count}</div>`;
        }
    
        return false;
}