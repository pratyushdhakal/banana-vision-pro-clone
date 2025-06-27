import { useRef } from "react";
import type { NavItemProps } from "../navbar.types";
import { useNav } from "../useNav";
import { motion } from "motion/react";

export default function NavItem({ navItem }: NavItemProps) {
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

	return (
		<>
			<motion.button
				onHoverStart={handleHoverStart}
				onHoverEnd={handleHoverEnd}
				className='px-[1.2vw] cursor-pointer text-sm whitespace-nowrap'
			>
				{navItem.name}
			</motion.button>
		</>
	);
}
