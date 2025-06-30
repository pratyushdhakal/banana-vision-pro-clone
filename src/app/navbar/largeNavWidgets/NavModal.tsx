import { motion } from "motion/react";
import { useNav } from "../context/useNav";
import Wrapper from "../../../shared/components/ui/wrapper/Wrapper";
import ModalLinksDivisionGrouper from "./ModalLinksDivisionGrouper";
import useNavModalAnimate from "./useNavModalAnimate";
import type { NonStaticElementProps } from "../navbar.types";

export default function NavModal({
	selectedNavLinksDivision,
	lock
}: NonStaticElementProps) {
	const { setSelectedNavLinksDivision } = useNav();
	const { scope } = useNavModalAnimate({ lock });

	return (
		<div ref={scope}>
			<motion.div
				style={{ opacity: 0 }}
				data-overlay
				onHoverStart={() => setSelectedNavLinksDivision(null)}
				className='fixed inset-0 hidden 900:flex origin-top size-full top-[var(--nav-height)] z-1000 bg-white/30 backdrop-blur-2xl'
			/>
			<motion.div
				data-modal
				style={{ scaleY: 0 }}
				className='fixed top-[var(--nav-height)] hidden 900:block origin-top bg-white pt-16 z-1500 pb-19 inset-x-0'
			>
				<Wrapper className='grid grid-cols-3'>
					{selectedNavLinksDivision.map((item, i) => (
						<ModalLinksDivisionGrouper
							linkVariant={i === 0 ? "descriptive" : "normal"}
							key={item.name}
							linksGroup={item}
						/>
					))}
				</Wrapper>
			</motion.div>
		</div>
	);
}
