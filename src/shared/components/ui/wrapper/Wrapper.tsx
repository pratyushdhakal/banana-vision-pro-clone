import { cn } from "../../../utils/cn";
import { wrapperVariants } from "./wrapper.cva";
import type { WrapperProps } from "./wrapper.types";
import { motion } from "motion/react";

export default function Wrapper({
	span,
	className,
	children,
	...props
}: WrapperProps) {
	return (
		<motion.div
			className={cn(wrapperVariants({ span }), className)}
			{...props}
		>
			{children}
		</motion.div>
	);
}
