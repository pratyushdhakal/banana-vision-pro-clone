import { LuBanana } from "react-icons/lu";
import { navItems } from "./navbar.constants";
import Wrapper from "../../shared/components/ui/wrapper/Wrapper";
import SearchAndCart from "./SearchAndCart";
import NavItems from "./largeNavWidgets/NavItems";
import { useNav } from "./context/useNav";
import { AnimatePresence } from "motion/react";
import useScrollLock from "../../shared/hooks/useScrollLock";
import Menu from "./menu/Menu";

export default function Navbar() {
	const { selectedNavLinksDivision, isMenuOpen, isScreenLarge } = useNav();
	const { lock, unlock } = useScrollLock({
		initialIsLocked: false,
		manual: true
	});
	return (
		<>
			<header className=' h-[var(--nav-height)] flex items-center justify-center'>
				<Wrapper className=' w-full'>
					<nav className='flex 900:justify-between  items-center'>
						<div className=''>
							<LuBanana className='text-xl' />
						</div>

						<NavItems navItems={navItems} />
						<SearchAndCart />
						<Menu lock={lock} />
					</nav>
				</Wrapper>
			</header>

			<AnimatePresence onExitComplete={unlock}>
				{selectedNavLinksDivision && isScreenLarge && (
					<NavItems.Modal
						selectedNavLinksDivision={selectedNavLinksDivision}
						lock={lock}
					/>
				)}
			</AnimatePresence>

			<AnimatePresence onExitComplete={unlock}>
				{isMenuOpen && <Menu.MenuItems />}
			</AnimatePresence>
		</>
	);
}
