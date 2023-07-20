import React from "react";
import cn from "classnames";

import { ShortCoinProps } from "./ShortCoin.props";
import styles from "./ShortCoin.module.css";

import { getPrettyPrice } from "../../../helpers";

export const ShortCoin = ({ coin, ...props }: ShortCoinProps): JSX.Element => {
	const { priceChange1d, icon, name, price } = coin;
	const prettyPrice: string = "$ " + getPrettyPrice(+price.toFixed(2));

	return (
		<>
			<div className={styles.container}>
				<img alt={name} className={styles.img} src={icon} />
				<div className={styles.content}>
					<p className={styles.name}>{name}</p>
					<p
						className={
							priceChange1d > 0
								? styles.increase
								: styles.decrease
						}
					>
						{priceChange1d}%
					</p>
				</div>
				<p>{prettyPrice}</p>
			</div>
		</>
	);
};
