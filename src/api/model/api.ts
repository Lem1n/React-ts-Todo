const TODO_API = 'https://697731c05b9c0aed1e85aa47.mockapi.io/api/test/todo/'
import type {Todo} from "../../app/types/types.ts";
export async function fetchTodo(): Promise<Todo[]> {
    const res = await fetch(TODO_API);

    if (!res.ok) {
        throw new Error('Ошибка загрузки...');
    }

    return res.json();
}
