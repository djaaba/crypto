import React from "react";
import cn from "classnames";

import styles from "./ChooseUs.module.css";
import { ChooseUsProps } from "./ChooseUs.props";

import { Advantage, Title } from "../../UI";
import { advantages } from "../../../stub";

export const ChooseUs = ({ ...props }: ChooseUsProps): JSX.Element => {
	return (
		<>
			<a id="chooseus" />
			<Title className={styles.title} tag="h2">
				WHY <span>CHOOSE US</span>
			</Title>
			<div className={styles.advantages}>
				{advantages.map((item) => (
					<Advantage advantage={item} />
				))}
			</div>
		</>
	);
};
