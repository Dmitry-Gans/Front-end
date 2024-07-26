// Определяем типы действий как константы
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Создаем действие для увеличения счетчика
export const increment = () => ({
	type: INCREMENT, // Указываем тип действия
});

// Создаем действие для уменьшения счетчика
export const decrement = () => ({
	type: DECREMENT, // Указываем тип действия
});
