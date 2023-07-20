import React from "react";
import cn from "classnames";

import styles from "./Market.module.css";
import { MarketProps } from "./Market.props";

import { Button, Row, Title } from "../../UI";

export const Market = ({
	coins,
	page,
	setPage,
	...props
}: MarketProps): JSX.Element => {
	return (
		<section className={styles.container}>
			<a id="market" />
			<Title tag="h2" className={styles.title}>
				Market Update
			</Title>
			<ul className={styles.list}>
				<li className={cn(styles.header, styles.row)}>
					<p>Coin</p>
					<p>Price</p>
					<p>24h Change</p>
					<p>Market Cap</p>
				</li>
				{coins.map((coin) => (
					<li key={coin.id}>
						<Row className={styles.row} coin={coin} />
					</li>
				))}
			</ul>
			<div className={styles.navigation}>
				<Button
					onClick={() => setPage((prev) => prev - 10)}
					disabled={!page}
				>
					Назад
				</Button>
				<Button onClick={() => setPage((prev) => prev + 10)}>
					Далее
				</Button>
			</div>
		</section>
	);
};
