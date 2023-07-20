import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

export const Footer = ({
	socials,
	className,
	...props
}: FooterProps): JSX.Element => {
	return (
		<>
			<footer className={styles.container}>
				<div className={styles.socials}>
					{socials.map((item) => (
						<a
							target="_blank"
							aria-label={`${item.name} link`}
							href={item.url}
						>
							<FontAwesomeIcon
								className={styles.icon}
								icon={item.icon}
							/>
						</a>
					))}
				</div>
				<div className={styles.docs}>
					<a target="_blank" aria-label="Read more in docs">
						Privacy
					</a>
					<a target="_blank" aria-label="Read more in docs">
						Terms of Use
					</a>
				</div>
			</footer>
		</>
	);
};
