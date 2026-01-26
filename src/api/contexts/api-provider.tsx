import { createContext, useContext, type ReactNode } from 'react';
import type { ApiContextValue } from '../../app/types/types';
import {useTodo} from "../model/hooks.ts";


const ApiContext = createContext<ApiContextValue | null>(null);

interface ApiProviderProps {
    children: ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
    const {data, isLoading, error, setData} = useTodo();

    return (
        <ApiContext.Provider value={{data, isLoading, error, setData}}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    const ctx = useContext(ApiContext);
    if (!ctx) {
        throw new Error('useApi должен вызываться внутри ApiProvider');
    }
    return ctx;
}
