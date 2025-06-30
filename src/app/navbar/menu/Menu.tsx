import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useNav } from "../context/useNav";
import { RxCross2 } from "react-icons/rx";
import MenuItems from "./MenuItems";

export default function Menu({ lock }: { lock: () => void }) {
	const { openMenu, isMenuOpen, closeMenu } = useNav();

	function handleMenuClick() {
		if (isMenuOpen) {
			closeMenu();
			return;
		}
		lock();
		openMenu();
	}

	return (
		<button
			onClick={handleMenuClick}
			className='px-3.5 900:hidden z-1500 block'
		>
			{isMenuOpen ? (
				<RxCross2 className='text-2xl' />
			) : (
				<HiOutlineMenuAlt4 className='text-2xl' />
			)}
		</button>
	);
}

Menu.MenuItems = MenuItems;
