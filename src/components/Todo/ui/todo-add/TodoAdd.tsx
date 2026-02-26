import type { FormEvent } from "react";

import type { ITodo } from "../../../../app/types/types.ts";
import { DDMMYYYY } from "../../model/compile-date.ts";

import exit from "../../../assets/svg/exit.svg";
import plus from "../../../assets/svg/plus.svg";
import { useAddTodoMutation } from "../../../../api/model/todo.api.ts";
import { useGetTodosQuery } from "../../../../api/model/api.ts";

interface FormElements extends HTMLFormControlsCollection {
	title: HTMLInputElement;
	text: HTMLInputElement;
	Date: HTMLInputElement;
}

interface TodoFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

interface TodoAddProps {
	togglePopup: () => void;
}
export function TodoAdd({ togglePopup }: TodoAddProps) {
	const { data, isLoading, error } = useGetTodosQuery();
	const [addTodo] = useAddTodoMutation();

	if (isLoading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка...</div>;
	if (!data) return <div>Ошибка data...</div>;

	const createTodo = (e: FormEvent<TodoFormElement>): void => {
		e.preventDefault();
		const form = e.currentTarget;
		const title: string = form.elements.title.value;
		const text: string = form.elements.text.value;
		const dateInput = form.elements.Date.value;
		const DateComplete = DDMMYYYY(dateInput);
		const date = new Date();
		const maxId = Math.max(
			...data.map((i) => i.id as unknown as number),
			0,
		);

		const newTodo: ITodo = {
			id: `${maxId + 1}`,
			title: title,
			text: text,
			createdAt: date.toLocaleDateString(),
			DateComplete: DateComplete ? DateComplete : null,
			completed: DateComplete ? true : false,
		};
		addTodo(newTodo);
		togglePopup();
		form.reset();
	};

	return (
		<div className={"popup"}>
			<div
				className={"popup-con"}
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -80%)",
					backgroundColor: "rgba(0,0,0 .3)",
				}}
			>
				<form className={"popup-form"} onSubmit={createTodo}>
					<div className={"popup-header"}>
						<div>Создать задачу</div>
						<button onClick={togglePopup}>
							<img src={exit} alt={"icon"} />
						</button>
					</div>
					<div className={"popup-inputs"}>
						<input
							name="title"
							type="text"
							placeholder="Заголовок"
							required
						/>
						<input
							name="text"
							type="text"
							minLength={3}
							placeholder="Текст"
							required
						/>
						<input
							name="Date"
							type="date"
							placeholder="Дата окончания"
						/>
					</div>
					<button className={"popup-button"} type="submit">
						Создать
						<img src={plus} alt={"icon"} />
					</button>
				</form>
			</div>
		</div>
	);
}
