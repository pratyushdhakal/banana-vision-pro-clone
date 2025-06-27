import { useEffect, useState } from "react";

export default function useScrollLock({
	initialIsLocked,
	manual = true
}: {
	initialIsLocked: boolean;
	manual?: boolean;
}) {
	const [isLocked, setIsLocked] = useState(initialIsLocked);
	const x = !manual ? initialIsLocked : isLocked;
	useEffect(() => {
		if (x) {
			const bodyWidth = document.body.clientWidth;
			const width = window.innerWidth;
			document.body.style.paddingRight = `${width - bodyWidth}px`;
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
			document.body.style.paddingRight = "0";
		}
	}, [x]);

	return { lock: () => setIsLocked(true), unlock: () => setIsLocked(false) };
}
