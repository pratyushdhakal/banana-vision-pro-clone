import { IoBagOutline, IoSearchOutline } from "react-icons/io5";

export default function SearchAndCart() {
	return (
		<div className='flex items-center py-2 900:ml-0 ml-auto'>
			{[
				{ Icon: IoSearchOutline, id: "ic1" },
				{ Icon: IoBagOutline, id: "ic2" }
			].map(({ Icon, id }) => (
				<button
					key={id}
					className='900:px-3 px-3.5'
				>
					<Icon className='text-xl' />
				</button>
			))}
		</div>
	);
}
