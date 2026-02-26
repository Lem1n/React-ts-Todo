import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes/Routes.ts";
import { BoardList } from "../components/board/board-list.tsx";
import { TodoItem } from "../components/Todo/ui/todo-item/todo-item.tsx";
import { Header } from "../components/header/header.tsx";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={ROUTES.HOME} element={<BoardList />} />
				<Route path={ROUTES.TODO} element={<TodoItem />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
