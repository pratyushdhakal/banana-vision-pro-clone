import type { Dispatch, SetStateAction } from "react";
import type {
	LinkGroup,
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
};
