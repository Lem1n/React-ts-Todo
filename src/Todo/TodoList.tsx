import {Todo} from "./todo/Todo.tsx";
import type {ApiContextValue, TodoHandle} from "../app/types/types.ts";
import {useApi} from "../api/contexts/api-provider.tsx";
import {TodoEmpty} from "./todo-empty/TodoEmpty.tsx";
import {useHandleTodo} from "./model/handle-todo.ts";
import {usePopup} from "../popup/popup-context/popup-context.tsx";

import plus from '../assets/svg/plus.svg'

export function TodoList () {

    const {data, setData, isLoading, error}:ApiContextValue = useApi()
    const {toggleAdd} = usePopup()

    const handlers = useHandleTodo({data, setData})
    if (!handlers) return null
    const {handleCompleted, handleEdit, handleDelete}:TodoHandle = handlers

    if (!data) return <div>Ошибка data..</div>
    if (!setData) return <div>Ошибка data..</div>
    if (error) return <div>Error..</div>
    if (isLoading) return <div>Загрузка...</div>

    const completeTodo = data.filter(i => i.completed === true)

    return (
        <>
            <button onClick={()=> toggleAdd()} className={"create-btn"}>Создать<img src={plus} alt={'icon'}/></button>
            <div className={"content"}>
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <div className={'content-info blue'}>Всего задач: <span>{data.length}</span></div>
                    <div className={'content-info purple'}>Выполнено: <span>{ data.length !== 0 ? `${completeTodo.length} из ${data.length}` : data.length}</span></div>
                </div>
                <div className={"todo-list"}>
                    {
                        data.length === 0 ?
                            <TodoEmpty/>
                            : data.map(i =>
                                    <Todo key={i.id} {...i} handleCompleted={handleCompleted} handleEdit={handleEdit} handleDelete={handleDelete}/>
                            )
                    }
                </div>
            </div>
        </>

    )
}