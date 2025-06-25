import type { navItems } from "../navbar.constants";

export default function NavItem({
	navItem
}: {
	navItem: (typeof navItems)[number];
}) {
	return (
		<>
			<button className='px-[1.2vw] text-sm whitespace-nowrap'>
				{navItem.name}
			</button>
		</>
	);
}
