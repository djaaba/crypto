import * as Icon from "@fortawesome/free-solid-svg-icons";

import { IAdvantage } from "../types";

export const advantages: IAdvantage[] = [
	{
		id: 1,
		title: "CONNECT YOUR WALLET",
		description: "Use Trust Wallet, Metamask or to connect to the app.",
		icon: Icon.faWallet,
	},
	{
		id: 2,
		title: "SELECT YOUR QUANTITY",
		description:
			"Upload your crypto and set a title, description and price.",
		icon: Icon.faPen,
	},
	{
		id: 3,
		title: "CONFIRM TRANSACTION",
		description: "Earn by selling your crypto on our marketplace.",
		icon: Icon.faBolt,
	},
	{
		id: 4,
		title: "RECEIVE YOUR OWN NFTS",
		description: "Invest all your crypto at one place on one platform.",
		icon: Icon.faSatelliteDish,
	},
	{
		id: 5,
		title: "TAKE A MARKET TO SELL",
		description:
			"Discover, collect the right crypto collections to buy or sell.",
		icon: Icon.faChessKnight,
	},
	{
		id: 6,
		title: "DRIVE YOUR COLLECTION",
		description: "We make it easy to Discover, Invest and manage.",
		icon: Icon.faBoxesStacked,
	},
];
