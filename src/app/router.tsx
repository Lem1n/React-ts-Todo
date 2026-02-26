import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ROUTES } from "./Routes/Routes";
function HydrateFallback() {
	return (
		<div>
			Загрузка...
		</div>
	);
}

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <App />,
		hydrateFallbackElement: <HydrateFallback />,
		children: [
			{
				path: "",
				lazy: () => import("@/pages/TodoList.page"),
			},
			{
				path: ":id",
				lazy: () => import("@/pages/TodoItem.page"),
			},
		],
	},
]);
