// Импортируем компоненты для маршрутизации:
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Компонент для отображения списка:
import DetailPage from './pages/DetailPage.jsx'
// Компонент для отображения деталей:
import ListPage from './pages/ListPage.jsx'

function App() {
	return (
		<Router>
			<Routes>
				{/* Маршрут для главной страницы списка */}
				<Route path='/' element={<ListPage />} />
				{/* Маршрут для страницы деталей с параметром ID */}
				<Route path='/item/:id' element={<DetailPage />} />
			</Routes>
		</Router>
	)
}

// Router - Оборачиваем приложение в Router для маршрутизации
// Routes - Группируем возможные маршруты приложения для управления
// Route - Определяем конкретный маршрут через path — строка,
// URL-путь и element — компонент, который будет отображаться по этому пути.
// :id является динамическим параметром, который получаем с помощью useParams.
export default App
