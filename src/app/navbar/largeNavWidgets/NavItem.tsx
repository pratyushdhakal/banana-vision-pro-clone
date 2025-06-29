import type { NavItemProps } from "../navbar.types";
import { motion } from "motion/react";
import useNavItem from "./useNavItem";

export default function NavItem({ navItem }: NavItemProps) {
	const { handleHoverEnd, handleHoverStart } = useNavItem(navItem);

	return (
		<>
			<motion.button
				onHoverStart={handleHoverStart}
				onHoverEnd={handleHoverEnd}
				className='flex  cursor-pointer text-sm whitespace-nowrap'
			>
				{navItem.name}
			</motion.button>
		</>
	);
}
