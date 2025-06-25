import { LuBanana } from "react-icons/lu";
import { navItems } from "./navbar.constants";
import NavItems from "./largeNavLinkGroups/NavItems";
import Wrapper from "../../shared/components/ui/wrapper/Wrapper";
import SearchAndCart from "./SearchAndCart";

export default function Navbar() {
	return (
		<header className='py-1 w-full'>
			<Wrapper className=''>
				<nav className='flex justify-between items-center'>
					<div>
						<LuBanana className='text-xl' />
					</div>

					<NavItems navItems={navItems} />
					<SearchAndCart />
				</nav>
			</Wrapper>
		</header>
	);
}
