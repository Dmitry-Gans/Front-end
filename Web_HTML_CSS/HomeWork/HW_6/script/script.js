"use strict";

const dataProducts = JSON.parse(dataProductsItem);
const articleEl = document.querySelector('article.products-content');

dataProducts.forEach(element => {
    const templateEl = document.getElementById('cartTemplate');
    const clone = templateEl.content.cloneNode(true);

    clone.querySelector('img.products-content__img-bg').src = element.src;
    clone.querySelector('p.products-content__button_text').innerHTML = element.textButton;
    clone.querySelector('h2.products-content__title').innerHTML = element.title;
    clone.querySelector('p.products-content__text').innerHTML = element.textContent;
    clone.querySelector('p.products-content__price').innerHTML = element.price;


    articleEl.appendChild(clone);
});


