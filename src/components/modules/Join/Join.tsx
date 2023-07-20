import React from "react";
import cn from "classnames";

import styles from "./Join.module.css";
import { JoinProps } from "./Join.props";

import { Button, Title } from "../../UI";

export const Join = ({ ...props }: JoinProps): JSX.Element => {
	return (
		<>
			<div className={styles.container}>
				<Title className={styles.title} tag="h1">
					<a id="join" />
					JOIN US VIA <span>DISCORD</span>
				</Title>
				<p className={styles.p}>
					Invest and manage all your crypto at one place.
				</p>
				<a aria-label="Discord link" href="https://discord.com/">
					<Button>Join via Discord</Button>
				</a>
			</div>
		</>
	);
};
