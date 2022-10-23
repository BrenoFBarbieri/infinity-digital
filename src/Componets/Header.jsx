import React from "react";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logoContainer}>
					<h1>Infinity Digital</h1>
				</div>
				<span className={styles.credit}>
					<i>Create by</i>
					<br />
					<q>Breno Barbieri</q>
				</span>
			</nav>
		</header>
	);
};

export default Header;
