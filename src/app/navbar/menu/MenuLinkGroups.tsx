import { cn } from "../../../shared/utils/cn";
import type { LinkGroup } from "../navbar.constants";

export default function MenuLinkGroups({
	divisionGroup,
	i
}: {
	divisionGroup: LinkGroup;
	i: number;
}) {
	return (
		<div
			data-name
			className={cn("", {
				"768:col-[1/-1]": i === 0
			})}
		>
			<div>{divisionGroup.name}</div>
			<div>
				{divisionGroup.links.map(link => (
					<div
						className={cn("", {
							"text-3xl": i === 0,
							"text-xl": i !== 0
						})}
					>
						{link}
					</div>
				))}
			</div>
		</div>
	);
}
