import { createContext, useEffect, useState, type ReactNode } from "react";
import type { WidthContextType } from "./types";

export const WidthContext = createContext<WidthContextType | undefined>(
	undefined
);

export const WidthContextProvider = ({ children }: { children: ReactNode }) => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<WidthContext.Provider value={{ width }}>{children}</WidthContext.Provider>
	);
};
