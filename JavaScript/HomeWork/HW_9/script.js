"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputEl = document.getElementById('from');
const spanEl = document.querySelector('span');
console.log(spanEl.innerHTML);
inputEl.addEventListener('input', (e) => {
    spanEl.innerHTML = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnEl = document.querySelector('button.messageBtn');
const divEl = document.querySelector('div.message');

btnEl.addEventListener('click', (e) => {
    divEl.classList.add('animate_animated');
    divEl.classList.toggle('animate_fadeInLeftBig');
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
const inputsEl = formEl.querySelector('input.form-control');
const selectEl = formEl.querySelector('select.form-control');
const btnEl1 = formEl.querySelector('button');

btnEl1.addEventListener('click', (e) => {
    if(inputsEl.value === "") {
        inputsEl.classList.add('error');
        e.preventDefault();
    } else {
        inputsEl.classList.remove('error');
    }
    if (selectEl.value === "") {
        selectEl.classList.add('error');
        e.preventDefault();
    } else {
        selectEl.classList.remove('error');
    }
});