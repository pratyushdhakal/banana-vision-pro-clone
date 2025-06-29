import type { AnimationSequence } from "motion";
import { useAnimate, usePresence } from "motion/react";
import { useEffect } from "react";

export default function useNavModalAnimate({ lock }: { lock: () => void }) {
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

	return {
		scope
	};
}
