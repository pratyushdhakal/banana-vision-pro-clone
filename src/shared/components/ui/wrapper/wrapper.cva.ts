import { cva } from "class-variance-authority";

export const wrapperVariants = cva("", {
	variants: {
		span: {
			full: "",
			constrained: "px-3 500:px-4.5 640:px-5.5 900:px-7 max-w-[1150px] mx-auto"
		}
	},
	defaultVariants: {
		span: "constrained"
	}
});

export type WrapperVariantsType = typeof wrapperVariants;
