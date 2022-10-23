import React from "react";

import { ListService } from "../ListServices";

import styles from "./Header.module.css";

const Header = ({ setServiceSelected }) => {
	return (
		<header className={styles.header}>
			<div
				className={styles.logo}
				onClick={(_) => setServiceSelected(null)}
			>
				<h1>Infinity Digital</h1>
			</div>
			<nav className={styles.nav}>
				<ul>
					{ListService.map((service) => (
						<li
							key={service.name}
							onClick={(_) => setServiceSelected(service)}
						>
							{service.name}
						</li>
					))}
				</ul>
			</nav>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.linkedin.com/in/brenobarbieri/"
				className={styles.credit}
			>
				<i>Create by</i>
				<br />
				<q>Breno Barbieri</q>
			</a>
		</header>
	);
};

export default Header;
