import React, { createContext, useContext, useState } from 'react';
import type {ReactNode} from 'react';
import {TodoAdd} from "../../Todo/todo-add/TodoAdd.tsx";
import {useApi} from "../../api/contexts/api-provider.tsx";
import type {ApiContextValue} from "../../app/types/types.ts";

interface isActive {
    isActive?: boolean
    toggleAdd: () => void
}
type PopupContextType = ApiContextValue & isActive

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = (): PopupContextType => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within PopupProvider');
    }
    return context;
};

interface PopupProviderProps {
    children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
    const {data, setData} = useApi()
    const [isActive, setIsActive] = useState<boolean>(false)
    const toggleAdd = ():void => {
        setIsActive(prev => !prev)
    }
    if (!data) return
    if (!setData) return
    return (
        <PopupContext.Provider value={{ isActive, data, setData, toggleAdd }}>
            {isActive && <TodoAdd data={data} setData={setData} toggleAdd={toggleAdd}/>}
            {children}
        </PopupContext.Provider>
    );
};