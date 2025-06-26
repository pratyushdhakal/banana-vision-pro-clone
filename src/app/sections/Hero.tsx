import { hero } from "../../shared/assets";

export default function Hero() {
	return (
		<section className='w-full  h-[calc(100dvh-var(--nav-height))]'>
			<div className='h-full w-full'>
				<img
					src={hero}
					alt=''
					className='size-full object-cover'
				/>
			</div>
		</section>
	);
}
