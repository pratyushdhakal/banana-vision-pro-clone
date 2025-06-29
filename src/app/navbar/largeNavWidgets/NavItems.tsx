import NavItem from "./NavItem";
import { navItems as _navItems } from "../navbar.constants";
import type { NavItemsProps } from "../navbar.types";
import NavModal from "./NavModal";

export default function NavItems({ navItems }: NavItemsProps) {
	return (
		<div className='hidden 900:flex w-full py-2 justify-evenly'>
			{navItems.map(navItem => (
				<NavItem
					key={navItem.name}
					navItem={navItem}
				/>
			))}
		</div>
	);
}

NavItems.Modal = NavModal;
