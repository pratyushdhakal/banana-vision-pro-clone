import { useContext } from "react";
import { WidthContext } from "./WidthContext";

export default function useWidth() {
	const ctx = useContext(WidthContext);
	if (ctx) {
		return ctx;
	}
	throw new Error("Please wrap you app with context provider");
}
