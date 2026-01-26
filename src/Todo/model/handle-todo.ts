import type {ApiContextValue} from "../../app/types/types.ts";


export function useHandleTodo ({data, setData}:ApiContextValue) {

    if (!data) return
    if (!setData) return
    const handleCompleted = (id:number):void => {

        setData( prev  =>
            prev?.map(i  => i.id === id ? {...i , completed: !i.completed} : i )
        )
    }

    const handleEdit = (id:number):number => {
        return id
    }

    const handleDelete = (id:number):void => {
        setData(data.filter(i=>i.id !== id))
    }
    return {handleCompleted,handleEdit,handleDelete}
}