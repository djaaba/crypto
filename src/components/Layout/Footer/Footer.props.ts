import { ISocial } from "../../../types";

export interface FooterProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	socials: ISocial[];
}
