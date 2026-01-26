import type {ApiContextValue, Todo} from "../../app/types/types.ts";
import {Link, useParams} from "react-router-dom";
import {useApi} from "../../api/contexts/api-provider.tsx";
import {ROUTES} from "../../app/Routes/Routes.ts";
import { Helmet } from '@dr.pogodin/react-helmet';
export function TodoItem () {

    const { id }:any = useParams();
    const {data, isLoading, error}:ApiContextValue = useApi();
    console.log(data)
    if (!data) return <div>Ошибка data..</div>
    if (error) return <div>Error..</div>
    if (isLoading) return <div>Загрузка...</div>

    const Todo:Todo = data[id - 1]

    return (
        <>
            <Helmet>
                <meta name={'description'} content={Todo.text}/>
                <title>{Todo.title}</title>
            </Helmet>
            <ul className={'breadcrumbs'}>
                <li><Link to={ROUTES.HOME}>Главная</Link></li>
                <li>/</li>
                <li>{Todo.title}</li>
            </ul>
            <div className={'todo-card'}>
                <div className={'todo-card-item'}>
                    <h1>{Todo.title}</h1>
                    <p>{Todo.text}</p>
                </div>
                <div className={'todo-card-info'}>
                    <div>Дата создания: <span className={'blue'}>{Todo.Date}</span></div>
                    {Todo.DateComplete && <div>Дата выполнения: <span className={'blue'}>{Todo.DateComplete}</span></div>}
                </div>
            </div>
        </>
    )
}