// Задание 1
// ● Создайте компонент Box, который оборачивает содержимое,
// переданное в children, в div с определенными стилями
// (например, с рамкой и отступами).
// ● Используйте Box для оборачивания различных элементов
// (текста, картинок, других компонентов), чтобы
// продемонстрировать его переиспользуемость.

function Box({ children }) {
	return (
		<div
			style={{
				'max-width': '350px',
				border: '1px solid black',
				padding: '10px',
				'border-radius': '5px',
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center',
				'flex-direction': 'column',
			}}
		>
			{children}
		</div>
	)
}

export default Box
