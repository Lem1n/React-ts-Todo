import { Link } from "react-router-dom";
import type { ITodo } from "../../../../app/types/types";
import del from "../../../assets/svg/delete.svg";
import edit from "../../../assets/svg/edit.svg";

import {
	useDeleteTodoMutation,
	useEditTodoMutation,
} from "../../../../api/model/todo.api";
import { useState } from "react";

interface Todo {
	item: ITodo;
}

export function Todo({ item }: Todo) {
	const [deleteTodo] = useDeleteTodoMutation();
	const [editTodo] = useEditTodoMutation();

	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [value, setValue] = useState<ITodo>({
		...item,
	});
	const handleCompleted = (): void => {
		const date = new Date();
		editTodo({
			...item,
			completed: !item.completed,
			DateComplete: !item.completed ? date.toLocaleDateString() : null,
		});
	};
	const handleEdit = () => {
		editTodo(value);
		setIsEdit(false);
	};
	const handleDelete = (id: string) => {
		deleteTodo(id);
	};

	return (
		<div className={`todo-item ${item.completed ? "active" : ""}`}>
			<button
				onClick={() => handleCompleted()}
				className={"todo-item_checkbox"}
			/>
			<div className={"todo-item-content"}>
				<div className={"todo-item_header"}>
					{isEdit ? (
						<input
							value={value.title}
							type="text"
							onChange={(e) =>
								setValue({ ...value, title: e.target.value })
							}
						/>
					) : (
						<Link to={`/${item.id}`}>
							<div className={"todo-item_title"}>
								{item.title}
							</div>
						</Link>
					)}

					<div className={"todo-item-info"}>
						<div className={"todo-item-info_data"}>
							<div>
								Дата создания:{" "}
								<span className={"blue"}>{item.createdAt}</span>
							</div>
							{item.DateComplete && (
								<div>
									Дата окончания:{" "}
									<span className={"blue"}>
										{item.DateComplete}
									</span>
								</div>
							)}
						</div>
						<div className={"todo-item-info_tools"}>
							<button onClick={() => handleDelete(item.id)}>
								<img src={del} alt={"icon"} />
							</button>

							{isEdit ? (
								<button onClick={() => handleEdit()}>OK</button>
							) : (
								!item.completed && (
									<button
										onClick={() =>
											setIsEdit((prev) => !prev)
										}
									>
										<img src={edit} alt={"icon"} />
									</button>
								)
							)}
						</div>
					</div>
				</div>
				{isEdit ? (
					<input
						className="todo-item_text"
						type="text"
						value={value.text}
						onChange={(e) =>
							setValue({ ...value, text: e.target.value })
						}
					/>
				) : (
					<div className={"todo-item_text"}>{item.text}</div>
				)}
			</div>
		</div>
	);
}
