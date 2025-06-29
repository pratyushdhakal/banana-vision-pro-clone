import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../shared/utils/cn";
import type { LinkGroup } from "../navbar.constants";
import { motion } from "motion/react";

const fadeVariants = {
	initial: { opacity: 0, x: -15 },
	animate: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.2 } }
};

const linkVariants = cva("", {
	variants: {
		linkVariant: {
			descriptive: "font-bold text-[1.65rem] py-1",
			normal: "font-medium py-0.5"
		}
	},
	defaultVariants: {
		linkVariant: "normal"
	}
});

interface ModalLinkDivisionGrouperVariantsProps
	extends VariantProps<typeof linkVariants> {
	className?: string;
	linksGroup: LinkGroup;
}

export default function ModalLinksDivisionGrouper({
	linkVariant,
	linksGroup
}: ModalLinkDivisionGrouperVariantsProps) {
	return (
		<motion.div
			layout
			data-grouper
		>
			<motion.div
				variants={fadeVariants}
				initial='initial'
				animate='animate'
				className='mb-2 text-sm'
			>
				{linksGroup.name}
			</motion.div>
			<div className=''>
				{linksGroup.links.map(link => (
					<motion.div
						variants={fadeVariants}
						initial='initial'
						animate='animate'
						className={cn(linkVariants({ linkVariant }))}
						key={link}
					>
						<motion.div>{link}</motion.div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
