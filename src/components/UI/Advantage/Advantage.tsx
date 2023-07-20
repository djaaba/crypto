import React from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Advantage.module.css";
import { AdvantageProps } from "./Advantage.props";

import { Title } from "../index";

export const Advantage = ({
	className,
	advantage,
	...props
}: AdvantageProps): JSX.Element => {
	const { title, description, icon } = advantage;

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<FontAwesomeIcon className={styles.icon} icon={icon} />
			</div>
			<div>
				<Title className={styles.title} tag="h3">
					{title}
				</Title>
				<p>{description}</p>
			</div>
		</div>
	);
};
