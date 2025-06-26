export const navItems = [
	{
		name: "Store",
		linksGroup: [
			{
				name: "Shop",
				links: [
					"Shop the Latest",
					"Mac",
					"Ipad",
					"Iphone",
					"Apple Watch",
					"Apple Vision Pro",
					"Accessories"
				]
			},
			{
				name: "Quick Links",
				links: ["Order Status", "Help me Choose"]
			},
			{
				name: "Shop Special Stores",
				links: ["Certified Refurbished", "Apple Trade In", "Business"]
			}
		]
	},
	{
		name: "Mac",
		linksGroup: [
			{
				name: "Explore Mac",
				links: ["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio"]
			},
			{
				name: "Mac Resources",
				links: ["Compare Mac", "Mac for Business", "Accessories"]
			},
			{
				name: "Get Help",
				links: ["Support", "Service & Repair"]
			}
		]
	},
	{
		name: "Ipad",
		linksGroup: [
			{
				name: "Choose your iPad",
				links: ["iPad Pro", "iPad Air", "iPad", "iPad mini"]
			},
			{
				name: "iPad Essentials",
				links: ["Apple Pencil", "Keyboards", "Compare iPad Models"]
			},
			{
				name: "More for iPad",
				links: ["Education", "Accessories"]
			}
		]
	},
	{
		name: "Iphone",
		linksGroup: [
			{
				name: "Meet the iPhone",
				links: ["iPhone 15 Pro", "iPhone 15", "iPhone SE"]
			},
			{
				name: "iPhone Tools",
				links: ["Compare Models", "Switch from Android"]
			},
			{
				name: "iPhone Offers",
				links: ["Carrier Deals", "Apple Trade In", "Installment Plans"]
			}
		]
	},
	{
		name: "Watch",
		linksGroup: [
			{
				name: "Explore Watch",
				links: ["Apple Watch Ultra", "Series 9", "SE", "Nike", "Hermès"]
			},
			{
				name: "Watch Features",
				links: ["Health", "Fitness", "Watch Faces"]
			},
			{
				name: "Watch Resources",
				links: ["Compare", "Support"]
			}
		]
	},
	{
		name: "Vision",
		linksGroup: [
			{
				name: "Discover Vision Pro",
				links: ["Features", "Tech Specs", "App Experiences"]
			},
			{
				name: "Vision Experience",
				links: ["Immersive Environments", "Spatial Video"]
			},
			{
				name: "For Developers",
				links: ["visionOS SDK", "Design for Vision Pro"]
			}
		]
	},
	{
		name: "AirPods",
		linksGroup: [
			{
				name: "AirPods Lineup",
				links: ["AirPods Pro", "AirPods (3rd Gen)", "AirPods Max"]
			},
			{
				name: "AirPods Features",
				links: ["Noise Cancellation", "Spatial Audio"]
			},
			{
				name: "Support & Help",
				links: ["Compare Models", "Accessories"]
			}
		]
	},
	{
		name: "Tv & Home",
		linksGroup: [
			{
				name: "Apple TV",
				links: ["Apple TV 4K", "Apple TV App"]
			},
			{
				name: "Smart Home",
				links: ["HomePod", "HomeKit", "Matter"]
			},
			{
				name: "TV & Home Resources",
				links: ["Support", "Buy Accessories"]
			}
		]
	},
	{
		name: "Entertainment",
		linksGroup: [
			{
				name: "Enjoy Entertainment",
				links: ["Apple Music", "Apple TV+", "Apple Arcade", "Apple Podcasts"]
			},
			{
				name: "More Services",
				links: ["Apple News+", "Apple Books"]
			},
			{
				name: "Bundles",
				links: ["Apple One", "Family Sharing"]
			}
		]
	},
	{
		name: "Accessories",
		linksGroup: [
			{
				name: "Top Accessories",
				links: ["Cases", "Keyboards", "Chargers", "Headphones"]
			},
			{
				name: "By Product",
				links: ["For Mac", "For iPad", "For iPhone"]
			},
			{
				name: "Popular Brands",
				links: ["Belkin", "Logitech", "Twelve South"]
			}
		]
	},
	{
		name: "Support",
		linksGroup: [
			{
				name: "Get Support",
				links: ["Product Support", "Check Coverage", "Repair Options"]
			},
			{
				name: "Helpful Topics",
				links: ["User Guides", "Contact Support", "Accessibility"]
			},
			{
				name: "More Resources",
				links: ["AppleCare+", "Community", "Feedback"]
			}
		]
	}
] as const;

export type NavItemsType = typeof navItems;
export type NavItemType = NavItemsType[number];
export type NavLinksGroupType = NavItemType["linksGroup"];
export type LinkGroup = NavLinksGroupType[number];
