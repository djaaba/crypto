import { ICoin } from "../../../types";

export interface TopCoinProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    coins: ICoin[];
}