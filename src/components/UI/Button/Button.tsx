import React from "react";
import cn from "classnames";

import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button = ({
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<>
			<button className={cn(styles.btn)} {...props}>
				{children}
			</button>
		</>
	);
};
