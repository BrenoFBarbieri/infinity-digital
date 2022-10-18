import React from "react";

import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../Assets/Logo.svg";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logoContainer}>
					<Logo className={styles.logo} />
					<h1>Infinity Digital</h1>
				</div>
			</nav>
		</header>
	);
};

export default Header;
