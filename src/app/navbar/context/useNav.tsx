import { useContext } from "react";
import { NavContext } from "./NavContext";

export function useNav() {
	const ctx = useContext(NavContext);

	if (ctx) {
		return ctx;
	}
	throw new Error("Please wrap your navbar in nav provider");
}
