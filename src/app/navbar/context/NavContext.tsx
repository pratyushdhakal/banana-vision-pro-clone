import { createContext, useEffect, useState, type ReactNode } from "react";
import type { NavContextType } from "../navbar.types";
import type { NavLinksGroupType } from "../navbar.constants";
import useWidth from "../../../shared/contexts/widthContext/useWidth";

export const NavContext = createContext<NavContextType | undefined>(undefined);

export default function NavProvider({ children }: { children: ReactNode }) {
	const { width } = useWidth();
	const [selectedNavLinksDivision, setSelectedNavLinksDivision] =
		useState<NavLinksGroupType | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);
	const isScreenLarge = width >= 900;

	useEffect(() => {
		if (isScreenLarge) {
			closeMenu();
			setSelectedNavLinksDivision(null);
			return;
		}
		setSelectedNavLinksDivision(null);
	}, [isScreenLarge]);

	useEffect(() => {
		if (!isMenuOpen) {
			setSelectedNavLinksDivision(null);
		}
	}, [isMenuOpen]);

	return (
		<NavContext.Provider
			value={{
				selectedNavLinksDivision,
				setSelectedNavLinksDivision,
				openMenu,
				closeMenu,
				isMenuOpen,
				isScreenLarge
			}}
		>
			{children}
		</NavContext.Provider>
	);
}
