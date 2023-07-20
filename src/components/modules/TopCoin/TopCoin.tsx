import React from "react";
import cn from "classnames";

import styles from "./TopCoin.module.css";
import { TopCoinProps } from "./TopCoin.props";

import { ShortCoin, Title } from "../../UI";

export const TopCoin = ({ coins, ...props }: TopCoinProps): JSX.Element => {
	return (
		<section className={styles.container}>
			<Title tag="h1" className={cn(styles.title, "wrapper")}>
				TRACK AND TRADE&nbsp;
				<br />
				<span>CRYPTO CURRENCIES</span>
			</Title>
			<ul className={cn(styles.content, "wrapper")}>
				{coins.map((coin) => (
					<li>
						<ShortCoin key={coin.id} coin={coin} />
					</li>
				))}
			</ul>
		</section>
	);
};
