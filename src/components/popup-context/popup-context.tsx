import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { TodoAdd } from "../Todo/ui/todo-add/TodoAdd";

interface isActive {
	isActive?: boolean;
	togglePopup: () => void;
}

const PopupContext = createContext<isActive | undefined>(undefined);

export const usePopup = (): isActive => {
	const context = useContext(PopupContext);
	if (!context) {
		throw new Error("ошибка вызова popUp");
	}
	return context;
};

interface PopupProviderProps {
	children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const togglePopup = (): void => {
		setIsActive((prev) => !prev);
	};
	return (
		<PopupContext.Provider value={{ isActive, togglePopup }}>
			{isActive && <TodoAdd togglePopup={togglePopup} />}
			{children}
		</PopupContext.Provider>
	);
};
