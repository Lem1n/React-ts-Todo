import * as React from "react";
export interface Todo {
    id: number,
    title: string,
    text: string,
    completed: boolean,
    Date: string,
    DateComplete: string | null,
}
export interface TodoHandle {
    handleDelete: (id:number) => void
    handleEdit: (id:number) => void
    handleCompleted: (id:number) => void
}
export interface ApiContextValue {
    data?: Todo[],
    setData?: React.Dispatch<React.SetStateAction<Todo[]>>,
    isLoading?: boolean,
    error?: Error | undefined,
}