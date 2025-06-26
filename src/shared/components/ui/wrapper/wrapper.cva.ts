import { cva } from "class-variance-authority";

export const wrapperVariants = cva("", {
	variants: {
		span: {
			full: "",
			constrained: "px-4 max-w-[1150px] mx-auto"
		}
	},
	defaultVariants: {
		span: "constrained"
	}
});

export type WrapperVariantsType = typeof wrapperVariants;
