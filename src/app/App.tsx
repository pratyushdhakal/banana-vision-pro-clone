import Hero from "./sections/Hero";
import Navbar from "./navbar/Navbar";
import SecondaryNavbar from "./secondary-navbar/SecondaryNavbar";
import NavProvider from "./navbar/context/NavContext";
import ParallaxContainer from "./sections/parallaxVideo/ParallaxContainer";
import { parallaxItems } from "./sections/parallaxVideo/parallaxVideo.constants";
import { WidthContextProvider } from "../shared/contexts/widthContext/WidthContext";

export default function App() {
	return (
		<WidthContextProvider>
			<NavProvider>
				<Navbar />
				<main className='relative'>
					<SecondaryNavbar />
					<Hero />
					{parallaxItems.map(parallaxItem => (
						<ParallaxContainer
							key={parallaxItem.video}
							parallaxItem={parallaxItem}
						/>
					))}
				</main>
			</NavProvider>
		</WidthContextProvider>
	);
}
