import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header.tsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
