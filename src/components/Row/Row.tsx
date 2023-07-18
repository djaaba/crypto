import React from "react";

import styles from "./Row.module.css";

import { ICoin } from "../../types";

export const Row = (coin: ICoin) => {
	const { rank, icon, name, price } = coin;

	return (
		<>
			<div className={styles.row}>
				<p>{rank}</p>
				<img src={icon} />
				<p>{name}</p>
				<p>{price}</p>
			</div>
		</>
	);
};
