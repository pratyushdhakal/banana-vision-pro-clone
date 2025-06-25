import { IoBagOutline, IoSearchOutline } from "react-icons/io5";

export default function SearchAndCart() {
	return (
		<div className='flex items-center py-2'>
			{[
				{ Icon: IoSearchOutline, id: "ic1" },
				{ Icon: IoBagOutline, id: "ic2" }
			].map(({ Icon, id }) => (
				<button
					key={id}
					className='px-[1vw]'
				>
					<Icon className='text-xl' />
				</button>
			))}
		</div>
	);
}
