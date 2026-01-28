
import {Link} from "react-router-dom";
import type {Todo, TodoHandle} from "../../app/types/types.ts";

type TodoHandlers = Todo & TodoHandle

export function Todo ({title, text, Date, DateComplete, completed, id, handleCompleted, handleEdit, handleDelete}:TodoHandlers) {


    return (
        <div className={`todo-item ${completed ? 'active' : ''}`}>
            <button onClick={() => handleCompleted(id)} className={'todo-item_checkbox'}/>
            <div className={'todo-item-content'}>
                <div className={'todo-item_header'}>
                    <Link to={`/${id}`}><div className={'todo-item_title'}>{title}</div></Link>
                    <div className={'todo-item-info'}>
                        <div className={'todo-item-info_data'}>
                            <div>Дата создания: <span className={'blue'}>{Date}</span></div>
                            {DateComplete && <div>Дата окончания: <span className={'blue'}>{DateComplete}</span></div>}
                        </div>
                        <div className={'todo-item-info_tools'}>
                            <button onClick={() => handleDelete(id)}>У</button>
                            { !completed && <button onClick={() => handleEdit(id)}>Р</button>}
                        </div>
                    </div>
                </div>
                <div className={'todo-item_text'}>{text}</div>
            </div>
        </div>

    )
 }