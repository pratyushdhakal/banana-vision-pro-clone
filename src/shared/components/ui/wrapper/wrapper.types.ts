import type { VariantProps } from "class-variance-authority";
import type { WrapperVariantsType } from "./wrapper.cva";
import type { HTMLMotionProps } from "motion/react";

export interface WrapperProps
	extends VariantProps<WrapperVariantsType>,
		HTMLMotionProps<"div"> {}
