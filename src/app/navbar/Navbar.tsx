import { LuBanana } from "react-icons/lu";
import { navItems } from "./navbar.constants";
import NavItems from "./largeNavLinkGroups/NavItems";
import Wrapper from "../../shared/components/ui/wrapper/Wrapper";
import SearchAndCart from "./SearchAndCart";
import NavModal from "./NavModal";
import { useNav } from "./useNav";
import { AnimatePresence } from "motion/react";
import useScrollLock from "../../shared/hooks/useScrollLock";

export default function Navbar() {
	const { selectedNavLinksDivision } = useNav();
	const { lock, unlock } = useScrollLock({
		initialIsLocked: false,
		manual: true
	});
	return (
		<>
			<header className=' h-[var(--nav-height)] flex items-center justify-center'>
				<Wrapper className=' w-full'>
					<nav className='flex  justify-between  items-center'>
						<div>
							<LuBanana className='text-xl' />
						</div>

						<NavItems navItems={navItems} />
						<SearchAndCart />
					</nav>
				</Wrapper>
			</header>

			<AnimatePresence onExitComplete={unlock}>
				{selectedNavLinksDivision && (
					<NavModal
						selectedNavLinksDivision={selectedNavLinksDivision}
						lock={lock}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
