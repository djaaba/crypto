import { IAdvantage } from "../../../types";

export interface AdvantageProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	advantage: IAdvantage;
}
