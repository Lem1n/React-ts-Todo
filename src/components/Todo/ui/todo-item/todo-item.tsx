import { Link, useParams } from "react-router-dom";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useGetTodoQuery } from "../../../../api/model/todo.api.ts";
import { ROUTES } from "../../../../app/Routes/Routes.ts";
export function TodoItem() {
	const { id }: any = useParams();

	const { data, error, isLoading } = useGetTodoQuery(id);

	if (!data) return <div>Ошибка data..</div>;
	if (error) return <div>Error..</div>;
	if (isLoading) return <div>Загрузка...</div>;

	return (
		<main>
			<Helmet>
				<meta name={"description"} content={data.text} />
				<title>{data.title}</title>
			</Helmet>
			<ul className={"breadcrumbs"}>
				<li>
					<Link to={ROUTES.HOME}>Главная</Link>
				</li>
				<li>/</li>
				<li>{data.title}</li>
			</ul>
			<div className={"todo-card"}>
				<div className={"todo-card-item"}>
					<h1>{data.title}</h1>
					<p>{data.text}</p>
				</div>
				<div className={"todo-card-info"}>
					<div>
						Дата создания:{" "}
						<span className={"blue"}>{data.createdAt}</span>
					</div>
					{data.DateComplete && (
						<div>
							Дата выполнения:{" "}
							<span className={"blue"}>{data.DateComplete}</span>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
