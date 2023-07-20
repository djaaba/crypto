import React from "react";
import cn from "classnames";

import styles from "./Row.module.css";
import { RowProps } from "./Row.props";

import { getPrettyPrice } from "../../../helpers";

export const Row = ({ coin, className, ...props }: RowProps): JSX.Element => {
	const { priceChange1d, marketCap, icon, name, price } = coin;

	const prettyPrice: string = "$ " + getPrettyPrice(+price.toFixed(2));
	const prettyMarketCap: string = "$ " + getPrettyPrice(+marketCap.toFixed());

	return (
		<>
			<div className={cn(styles.container, className)}>
				<figure className={styles.content}>
					<img alt={name} className={styles.img} src={icon} />
					<p className={styles.name}>{name}</p>
				</figure>
				<p>{prettyPrice}</p>
				<p
					className={
						priceChange1d > 0 ? styles.increase : styles.decrease
					}
				>
					{priceChange1d} %
				</p>
				<p>{prettyMarketCap}</p>
			</div>
		</>
	);
};
