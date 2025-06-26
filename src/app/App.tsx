import Navbar from "./navbar/Navbar";
import NavProvider from "./navbar/NavContext";
import SecondaryNavbar from "./secondary-navbar/SecondaryNavbar";
import Hero from "./sections/Hero";
import ParallaxContainer from "./sections/parallaxVideo/ParallaxContainer";
import { parallaxItems } from "./sections/parallaxVideo/parallaxVideo.constants";

export default function App() {
	return (
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
	);
}
