import NavItem from "./NavItem";
import { navItems as _navItems } from "../navbar.constants";

export default function NavItems({ navItems }: { navItems: typeof _navItems }) {
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
