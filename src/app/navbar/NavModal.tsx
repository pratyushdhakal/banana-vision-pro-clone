import {
	motion,
	useAnimate,
	usePresence,
	type AnimationSequence
} from "motion/react";
import { useNav } from "./useNav";
import Wrapper from "../../shared/components/ui/wrapper/Wrapper";
import ModalLinksDivisionGrouper from "./largeNavLinkGroups/ModalLinksDivisionGrouper";
import { useEffect } from "react";
import type { NavLinksGroupType } from "./navbar.constants";

export default function NavModal({
	selectedNavLinksDivision,
	lock
}: {
	selectedNavLinksDivision: NavLinksGroupType;
	lock: () => void;
}) {
	const { setSelectedNavLinksDivision } = useNav();
	const [scope, animate] = useAnimate();
	const [isPresent, safeToRemove] = usePresence();

	lock();
	useEffect(() => {
		if (isPresent) {
			const sequence: AnimationSequence = [
				["[data-modal]", { scaleY: 1 }, { duration: 0.2 }],
				["[data-overlay]", { opacity: 1 }, { at: 0.1, duration: 0.1 }],
				["[data-grouper]", { opacity: [0, 1], x: [-20, 0] }, { at: 0.2 }]
			];
			animate(sequence);
		}
		if (!isPresent) {
			const sequence: AnimationSequence = [
				["[data-grouper]", { opacity: 0 }, { duration: 0.1 }],
				["[data-modal]", { scaleY: 0 }, { at: 0.12, duration: 0.2 }],
				["[data-overlay]", { opacity: 0 }, { at: 0.19, duration: 0.3 }]
			];
			animate(sequence).then(() => safeToRemove());
		}
	}, [isPresent]);

	return (
		<div ref={scope}>
			<motion.div
				style={{ opacity: 0 }}
				data-overlay
				onHoverStart={() => setSelectedNavLinksDivision(null)}
				className='fixed inset-0  origin-top size-full top-[var(--nav-height)] z-1000 bg-white/30 backdrop-blur-2xl'
			/>
			<motion.div
				data-modal
				style={{ scaleY: 0 }}
				// transition={{ layout: { duration: 0.1 } }}
				className='fixed top-[var(--nav-height)] origin-top bg-white pt-16 z-1500 pb-19 inset-x-0'
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
