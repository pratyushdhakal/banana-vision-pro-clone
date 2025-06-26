import { vr_four, vr_one, vr_three, vr_two } from "../../../shared/assets";

export const parallaxItems = [
	{
		video: vr_one,
		text: `“Virtual Reality is really a new communication platform. By feeling truly present, you can share unbounded spaces and experiences with the people in your life. Imagine sharing not just moments with your friends online, but entire experiences and adventures.” `,
		heading: "A New Frontier for Connection",
		largeDescription:
			"This quote highlights the social and communicative potential of VR. It goes beyond simply seeing or hearing someone online and emphasizes the feeling of presence that VR can create. This sense of being truly there with another person, even when physically separated, allows for a more profound level of shared experience. The author imagines a future where we don't just share photos or videos, but entire adventures and environments with friends and family, fundamentally changing how we connect and interact."
	},
	{
		video: vr_two,
		text: `“The thing that’s remarkably beautiful to me about virtual reality is that you can make up reality in virtual reality and share it with other people. It’s like having a collaborative lucid dream.”`,
		heading: "Shared Dreams and Creative Worlds",
		largeDescription:
			"This description focuses on the creative and collaborative aspects of VR. It likens the experience to a 'collaborative lucid dream,' a powerful metaphor for the ability to not just consume content but to actively create and shape it in real-time with others. This speaks to the potential for artists, designers, and everyday users to build fantastical worlds, design unique experiences, and engage in shared creative endeavors that are unbound by the limitations of the physical world."
	},
	{
		video: vr_three,
		text: `“By the end of this decade, computers will disappear as distinct physical objects, with displays built in our eyeglasses, and electronics woven in our clothing, providing full-immersion visual virtual reality.”`,
		heading: "The Disappearance of Devices",
		largeDescription:
			"This quote offers a bold prediction about the future of hardware and the integration of technology into our daily lives. It suggests that the bulky headsets of today are just a stepping stone. The vision is one of 'ubiquitous computing,' where VR is no longer a separate device but a seamless part of our clothing and accessories. This level of integration would lead to 'full-immersion visual virtual reality,' making the experience more accessible and less cumbersome, blurring the lines between the digital and physical worlds."
	},
	{
		video: vr_four,
		text: "“I believe that Virtual Reality will hit it big time. I know that some of my colleagues disagree, but I believe in it.”",
		heading: "The Unwavering Optimist",
		largeDescription:
			"This statement is a powerful expression of confidence and foresight. It acknowledges the skepticism that often accompanies new technologies but asserts a strong personal belief in VR's future success. This quote embodies the kind of conviction that drives innovation. It highlights the often-divided opinions on emerging tech and showcases the passion of those who see beyond current limitations and anticipate a significant future for the technology."
	}
] as const;

export type ParallaxItemType = (typeof parallaxItems)[number];
export type ParallaxVideoType = ParallaxItemType["video"];
