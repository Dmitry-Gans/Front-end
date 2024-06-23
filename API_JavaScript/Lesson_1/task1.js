'use strict'

// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.

const widthBom = window.innerWidth
const heightBom = window.innerHeight

const resultEl = document.querySelector('.width-height')
resultEl.innerHTML = `ширина:${widthBom} высота:${heightBom}`

window.addEventListener('resize', () => {
	resultEl.innerHTML = `ширина:${window.innerWidth} высота:${window.innerHeight}`
})

// document.documentElement - Это само окно браузера.
console.log(document.documentElement.clientWidth)
console.log(document.documentElement.clientHeight)
