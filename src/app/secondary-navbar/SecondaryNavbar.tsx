import Wrapper from "../../shared/components/ui/wrapper/Wrapper";
import { buttons, links } from "./secondaryNavbar.constants";
import { useState } from "react";

export default function SecondaryNavbar() {
	const [selected, setSelected] = useState(0);

	return (
		<nav className='sticky top-0 inset-x-0 w-full z-950'>
			<div className='bg-white w-full absolute top-0 inset-x-0 backdrop-blur-2xl flex '>
				<Wrapper className='flex w-full h-[var(--secondary-nav-height)] '>
					<div className='flex items-center w-full space-x-6 '>
						<div className='font-bold text-xl'>Banana VR</div>
						<div className='flex text-sm ml-auto gap-3'>
							{links.map((link, i) => (
								<div
									key={link}
									onClick={() => setSelected(i)}
									className='px-0.5 py-3  relative'
								>
									{link}
									{selected === i && (
										<span className='absolute  text-sm top-full bg-black inset-x-0 w-full h-[1px]' />
									)}
								</div>
							))}
						</div>

						<div className='space-x-5'>
							{buttons.map(({ name, ...styles }) => (
								<button
									key={name}
									className='px-4 py-[0.1rem] text-sm rounded-full'
									style={styles}
								>
									{name}
								</button>
							))}
						</div>
					</div>
				</Wrapper>
			</div>
		</nav>
	);
}
