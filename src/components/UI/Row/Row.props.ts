import { ICoin } from "../../../types";

export interface RowProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	coin: ICoin;
}
