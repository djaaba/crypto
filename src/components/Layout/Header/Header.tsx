import React from "react";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

import * as Icon from "@fortawesome/free-brands-svg-icons";
import { Title } from "../../UI";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<>
			<a id="home" />
			<header className={cn(styles.container, "wrapper")}>
				<Title tag="h3">COINMARKET</Title>
				<nav className={styles.navigation}>
					<a href="#home">Home</a>
					<a href="#market">Market</a>
					<a href="#chooseus">Choose us</a>
					<a href="#join">Join</a>
				</nav>
				<a
					className={styles.a}
					aria-label="link to github"
					href="https://github.com/djaaba/crypto"
					target="_blank"
				>
					<FontAwesomeIcon
						className={styles.icon}
						icon={Icon.faGithub}
					/>
				</a>
			</header>
		</>
	);
};
