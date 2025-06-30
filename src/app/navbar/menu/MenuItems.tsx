import { motion } from "motion/react";
import { navItems } from "../navbar.constants";
import { cn } from "../../../shared/utils/cn";
import Wrapper from "../../../shared/components/ui/wrapper/Wrapper";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import MenuLinkGroups from "./MenuLinkGroups";
import useMenuItemsAnimate from "./useMenuItemsAnimate";

export default function MenuItems() {
	const {
		scope,
		handleClickBackClick,
		selectedNavLinksDivision,
		setSelectedNavLinksDivision
	} = useMenuItemsAnimate();

	return (
		<motion.div
			ref={scope}
			data-menu-items-container
			style={{ scaleY: 0, opacity: 0 }}
			className={cn(
				"fixed inset-0 border z-1400 origin-top 768:hidden pt-14 pb-6 bg-white flex flex-row items-start "
			)}
		>
			<Wrapper
				data-items
				data-items-text
				style={{ opacity: 0 }}
				className='flex absolute ml-6 z-1300 inset-0 py-16 flex-col min-w-[100%]'
			>
				{navItems.map(item => (
					<button
						onClick={() => setSelectedNavLinksDivision(item.linksGroup)}
						data-button
						key={item.name}
						className='text-3xl py-1.5 flex group w-full text-black/70  hover:text-black transition-colors'
					>
						{item.name}
						<span className='translate-y-1.5 group-hover:opacity-100 opacity-0  pr-12 ml-auto'>
							<MdNavigateNext />
						</span>
					</button>
				))}
			</Wrapper>

			<Wrapper
				data-group-cont
				data-items-text
				style={{ x: "100vh", opacity: 0 }}
				className='absolute ml-6 grid 768:grid-cols-2 w-full z-1200 py-4 gap-8'
			>
				<button
					onClick={() => handleClickBackClick()}
					className='absolute -top-11 left-2'
				>
					<MdNavigateBefore className='text-3xl' />
				</button>
				{selectedNavLinksDivision &&
					selectedNavLinksDivision.map((divisionGroup, i) => (
						<MenuLinkGroups
							divisionGroup={divisionGroup}
							i={i}
						/>
					))}
			</Wrapper>
		</motion.div>
	);
}
