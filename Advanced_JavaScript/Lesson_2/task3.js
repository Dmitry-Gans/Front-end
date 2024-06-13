"use strict";

/*
Задание 3:
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить,
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:

```
<input class="number-input" type="text"  placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```

Необходимо обрабатывать событие проверки числа пользователем, проверяющая
функция должна использовать try и catch для проверки вводимого значения.
*/

const inputEl = document.querySelector(".number-input");

const buttonEl = document.querySelector(".check-button");

const messageEl = document.querySelector(".message");

// Вариант через try и catch, он тут на самом деле не нужен, так как функция синхронный, а try и catch обычно используются для асинхронных функций:
buttonEl.addEventListener("click", () => {
  try {
    // Проверяем, является ли введённое значение числом. Если значение не является конечным числом(а так же, что это не NaN) или является пустой строкой, то выдаем ошибку.
    // value возвращает строку, используем "+", чтобы превратить строку в число
    if (!Number.isFinite(+inputEl.value) || inputEl.value === "") {
      throw new Error("Не число");
    }
    messageEl.textContent = "Число";
  } catch (error) {
    messageEl.textContent = error.message;
  }
});

// Вариант через if:

// buttonEl.addEventListener('click', () => {
//     if (Number.isFinite(+inputEl.value) || inputEl.value !== '') {
//         messageEl.textContent = 'Число';
//     } else {
//         messageEl.textContent = 'Не число';
//     }
// });
