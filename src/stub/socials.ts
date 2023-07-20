import * as Icon from "@fortawesome/free-brands-svg-icons";

import { ISocial } from "../types";

export const socials: ISocial[] = [
	{
		id: 1,
		name: "twitter",
		url: "https://twitter.com",
		icon: Icon.faTwitter,
	},
	{
		id: 2,
		name: "discord",
		url: "https://discord.com/",
		icon: Icon.faDiscord,
	},
	{
		id: 3,
		name: "facebook",
		url: "https://facebook.com/",
		icon: Icon.faFacebook,
	},
	{
		id: 4,
		name: "youtube",
		url: "https://www.youtube.com",
		icon: Icon.faYoutube,
	},
];
