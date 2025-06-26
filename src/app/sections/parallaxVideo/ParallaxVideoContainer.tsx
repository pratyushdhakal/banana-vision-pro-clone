import { useRef } from "react";
import Wrapper from "../../../shared/components/ui/wrapper/Wrapper";
import type { ParallaxItemProps } from "./parallaxVideo.types";
import {
	useMotionValueEvent,
	motion,
	useScroll,
	useTransform
} from "motion/react";

export default function ParallaxVideoContainer({
	parallaxItem
}: ParallaxItemProps) {
	const targetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"]
	});

	useMotionValueEvent(scrollYProgress, "change", latest => {
		console.log({ latest });
	});

	const opacity = useTransform(
		scrollYProgress,
		[0.1, 0.25, 0.45, 0.5, 0.6],
		[0, 0, 1, 1, 0]
	);
	const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.85]);

	return (
		<>
			<motion.div
				style={{ scale }}
				ref={targetRef}
				className='h-[calc(100dvh-var(--secondary-nav-height))] w-full sticky top-[var(--secondary-nav-height)]'
			>
				<video
					autoPlay
					muted
					loop
					className='w-full h-full object-cover'
					src={parallaxItem.video}
				/>
				<motion.div
					style={{ opacity }}
					className='w-full h-full hello bg-black/70 absolute inset-0 z-850'
				/>
			</motion.div>
			<Wrapper className='relative  z-750 text-white text-5xl text-center'>
				<p>{parallaxItem.text}</p>
			</Wrapper>
		</>
	);
}
