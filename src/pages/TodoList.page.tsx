import { TodoList } from "@/components/Todo/TodoList";
import { Helmet } from "@dr.pogodin/react-helmet";

function TodoListPage() {

    return (
		<>
			<Helmet>
				<title>React todo</title>
			</Helmet>
			<main>
				<TodoList />
			</main>
		</>
	);
}

export const Component = TodoListPage;
