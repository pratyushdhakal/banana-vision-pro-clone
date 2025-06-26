import NavItem from "./NavItem";
import { navItems as _navItems } from "../navbar.constants";
import type { NavItemsProps } from "../navbar.types";

export default function NavItems({ navItems }: NavItemsProps) {
	return (
		<div className='hidden 950:flex  py-2 justify-center '>
			{navItems.map(navItem => (
				<NavItem
					key={navItem.name}
					navItem={navItem}
				/>
			))}
		</div>
	);
}
