import React from "react";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<h1>Infinity Digital</h1>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>Calculadora</li>
					<li>Calculadora</li>
					<li>Calculadora</li>
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
