'use strict'

// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.

const widthBom = window.innerWidth
const heightBom = window.innerHeight

const resaultEl = document.querySelector('.widht-height')
resaultEl.innerHTML = `ширина:${widthBom} высота:${heightBom}`

window.addEventListener('resize', () => {
	resaultEl.innerHTML = `ширина:${window.innerWidth} высота:${window.innerHeight}`
})

console.log(document.documentElement.clientWidth)
console.log(document.documentElement.clientHeight)
