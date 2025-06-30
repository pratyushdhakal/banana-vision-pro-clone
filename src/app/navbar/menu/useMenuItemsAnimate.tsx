import { useAnimate, usePresence } from "motion/react";
import { useNav } from "../context/useNav";
import type { AnimationSequence } from "motion";
import { useEffect } from "react";

export default function useMenuItemsAnimate() {
	const { selectedNavLinksDivision, setSelectedNavLinksDivision } = useNav();
	const [scope, animate] = useAnimate();
	const [isPresent, safeToRemove] = usePresence();

	useEffect(() => {
		if (!!selectedNavLinksDivision) {
			const seq: AnimationSequence = [
				[
					"[data-items]",
					{ opacity: 0, x: "-100vh" },
					{ duration: 0.3, type: "tween" }
				],
				[
					"[data-group-cont]",
					{ x: 0, opacity: 1 },
					{ at: 0, duration: 0.3, type: "tween" }
				]
			];
			animate(seq);
		}
	}, [selectedNavLinksDivision]);

	useEffect(() => {
		if (isPresent) {
			const seq: AnimationSequence = [
				[scope.current, { scaleY: 1, opacity: 1 }, { duration: 0.2 }],
				["[data-items-text]", { opacity: 1 }]
			];
			animate(seq);
			return;
		}

		if (!isPresent) {
			const seq: AnimationSequence = [
				["[data-items-text]", { opacity: 0 }, { duration: 0.1 }],
				[scope.current, { scaleY: 0, opacity: 0 }, { at: 0.1 }]
			];
			animate(seq).then(() => safeToRemove());
		}
	}, [isPresent]);

	function handleClickBackClick() {
		const seq: AnimationSequence = [
			["[data-items]", { opacity: 1, x: 0 }, { duration: 0.3, type: "tween" }],
			[
				"[data-group-cont]",
				{ x: "100vh", opacity: 0 },
				{ at: 0, duration: 0.3, type: "tween" }
			]
		];
		animate(seq).then(() => setSelectedNavLinksDivision(null));
	}

	return {
		handleClickBackClick,
		scope,
		setSelectedNavLinksDivision,
		selectedNavLinksDivision
	};
}
