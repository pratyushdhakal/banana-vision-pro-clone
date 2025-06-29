import { useRef } from "react";
import { useNav } from "../context/useNav";
import type { NavItemType } from "../navbar.constants";

export default function useNavItem(navItem: NavItemType) {
	const { setSelectedNavLinksDivision } = useNav();

	const debouncedHoverLinkStatusId = useRef<number | null>(null);

	const handleHoverStart = () => {
		debouncedHoverLinkStatusId.current = setTimeout(() => {
			setSelectedNavLinksDivision(navItem.linksGroup);
		}, 100);
	};

	const handleHoverEnd = () => {
		if (debouncedHoverLinkStatusId.current) {
			clearInterval(debouncedHoverLinkStatusId.current);
		}
	};

	return { handleHoverStart, handleHoverEnd };
}
