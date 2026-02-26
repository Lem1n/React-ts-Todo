import { Todo } from "./ui/todo/Todo.tsx";
import { TodoEmpty } from "./ui/todo-empty/TodoEmpty.tsx";
import plus from "../../assets/svg/plus.svg";
import { usePopup } from "../popup-context/popup-context.tsx";
import { useGetTodosQuery } from "../../api/model/api.ts";

export function TodoList() {
	const { togglePopup } = usePopup();

	const {data, error, isLoading} = useGetTodosQuery();


	if (!data) return <div>Ошибка data..</div>;
	if (error) return <div>Error..</div>;
	if (isLoading) return <div>Загрузка...</div>;

	const completeTodo = data.filter((i) => i.completed === true);

	return (
		<>
			<button onClick={() => togglePopup()} className={"create-btn"}>
				Создать
				<img src={plus} alt={"icon"} />
			</button>
			<div className={"content"}>
				<div
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<div className={"content-info blue"}>
						Всего задач: <span>{data.length}</span>
					</div>
					<div className={"content-info purple"}>
						Выполнено:{" "}
						<span>
							{data.length !== 0
								? `${completeTodo.length} из ${data.length}`
								: data.length}
						</span>
					</div>
				</div>
				<div className={"todo-list"}>
					{data.length === 0 ? (
						<TodoEmpty />
					) : (
						data.map((i) => <Todo key={i.id} item={i} />)
					)}
				</div>
			</div>
		</>
	);
}
