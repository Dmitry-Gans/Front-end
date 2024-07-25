import { createContext, useState } from 'react';

// Создаем контекст для пользователя
export const UserContext = createContext();

// Провайдер для UserContext, позволяющий передавать данные и функции
export const UserProvider = ({ children }) => {
	// Используем хук состояния для хранения имени пользователя
	const [username, setUsername] = useState("Гость");

	// Возвращаем провайдер с начальным значением и детьми внутри
	return (
		<UserContext.Provider value={{ username, setUsername }}>
			{children}
		</UserContext.Provider>
	);
};
