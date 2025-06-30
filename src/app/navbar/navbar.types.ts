import type { Dispatch, SetStateAction } from "react";
import type {
	NavItemsType,
	NavItemType,
	NavLinksGroupType
} from "./navbar.constants";

export interface NavItemsProps {
	navItems: NavItemsType;
}

export interface NavItemProps {
	navItem: NavItemType;
}

export type NavContextType = {
	selectedNavLinksDivision: NavLinksGroupType | null;
	setSelectedNavLinksDivision: Dispatch<
		SetStateAction<NavLinksGroupType | null>
	>;
	isMenuOpen: boolean;
	openMenu: () => void;
	closeMenu: () => void;
	isScreenLarge: boolean;
};

export interface NonStaticElementProps {
	selectedNavLinksDivision: NavLinksGroupType;
	lock: () => void;
}
