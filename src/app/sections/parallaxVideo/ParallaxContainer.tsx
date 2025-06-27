import type { ParallaxItemProps } from "./parallaxVideo.types";
import ParallaxVideoContainer from "./ParallaxVideoContainer";

export default function ParallaxContainer({ parallaxItem }: ParallaxItemProps) {
	return (
		<section>
			<div className='h-[220vh] relative'>
				<ParallaxVideoContainer parallaxItem={parallaxItem} />
			</div>
			<div className='py-19 grid gap-20 grid-cols-[40%_60%] px-30'>
				<div className='text-4xl font-bold'>{parallaxItem.heading}</div>
				<div className='text-2xl font-medium opacity-60'>
					{parallaxItem.largeDescription}
				</div>
			</div>
		</section>
	);
}
