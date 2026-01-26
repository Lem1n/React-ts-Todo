import { useEffect, useState } from 'react';
import { fetchTodo } from './api.ts';
import type { Todo, ApiContextValue } from '../../app/types/types';

export function useTodo(): ApiContextValue {
    const [data, setData] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>(undefined);
    const loadTodo = async () => {
        try {
            setIsLoading(true);
            const films = await fetchTodo();
            setData(films);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Неизвестная ошибка'));
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        void loadTodo();
    }, []);
    return { data, isLoading, error, setData }
}
