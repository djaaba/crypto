import { ICoin } from "../../../types";

export interface MarketProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	coins: ICoin[];
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}
