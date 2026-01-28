import  type {FormEvent}  from 'react';

import type {Todo} from "../../app/types/types.ts";
import {DDMMYYYY} from "../model/compile-date.ts";
import * as React from "react";

import exit from '../../assets/svg/exit.svg'
import plus from '../../assets/svg/plus.svg'


interface FormElements extends HTMLFormControlsCollection {
    title: HTMLInputElement;
    text: HTMLInputElement;
    Date: HTMLInputElement;
}

interface TodoFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

interface TodoAddProps {
    data: Todo[],
    setData: React.Dispatch<React.SetStateAction<Todo[]>>,
    toggleAdd: () => void,
}
export function TodoAdd({data, setData, toggleAdd }: TodoAddProps) {
    const addTodo = (e: FormEvent<TodoFormElement>): void => {
        e.preventDefault();
        const form = e.currentTarget;
        const title:string = form.elements.title.value;
        const text:string = form.elements.text.value;
        const dateInput = form.elements.text.value;
        const dateComleted:string = DDMMYYYY(dateInput);
        const date = new Date()
        const id = Math.max(...data.map(i => i.id),0) + 1;
        const newTodo:Todo = { id: id, title:title, text: text, Date: date.toLocaleDateString(), DateComplete: dateComleted !== 'Invalid Date' ? dateComleted : null,completed: false}
        setData([...data, newTodo]);
        toggleAdd()
        form.reset();
    };



    return (
        <div className={'popup'}>
            <div className={'popup-con'} style={{position:'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -80%)', backgroundColor: 'rgba(0,0,0 .3)'}}>
                <form className={'popup-form'} onSubmit={addTodo}>
                    <div className={'popup-header'} >
                        <div>Создать задачу</div>
                        <button onClick={toggleAdd}><img src={exit} alt={'icon'}/></button>
                    </div>
                    <div className={'popup-inputs'}>
                        <input name="title" type="text" placeholder="Заголовок" required/>
                        <input name="text" type="text" minLength={3} placeholder="Текст" required/>
                        <input name="Date" type="date" placeholder="Дата окончания" />
                    </div>
                    <button className={'popup-button'} type="submit">Создать<img src={plus} alt={'icon'}/></button>
                </form>
            </div>
        </div>
    );
}
