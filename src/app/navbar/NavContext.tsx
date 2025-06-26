import { createContext, useState, type ReactNode } from "react";
import type { NavLinksGroupType } from "./navbar.constants";
import type { NavContextType } from "./navbar.types";

export const NavContext = createContext<NavContextType | undefined>(undefined);

export default function NavProvider({ children }: { children: ReactNode }) {
	const [selectedNavLinksDivision, setSelectedNavLinksDivision] =
		useState<NavLinksGroupType | null>(null);
	return (
		<NavContext.Provider
			value={{ selectedNavLinksDivision, setSelectedNavLinksDivision }}
		>
			{children}
		</NavContext.Provider>
	);
}
