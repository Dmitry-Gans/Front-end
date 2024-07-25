import { createContext, useState } from 'react';

// Создаем контекст для темы
export const ThemeContext = createContext();

// Провайдер для ThemeContext, позволяющий делиться данными о теме
export const ThemeProvider = ({ children }) => {
	// Используем хук состояния для хранения текущей темы
	const [theme, setTheme] = useState('light');

	// Возвращаем провайдер с начальным значением и детьми внутри
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
