import React from "react";

import { ListService } from "../ListServices";

import styles from "./Header.module.css";

const Header = ({ setServiceSelected }) => {
	function handleClick(event) {
		event.preventDefault();
		setServiceSelected(null);
	}
	return (
		<header className={styles.header}>
			<a href="/" className={styles.logo} onClick={handleClick}>
				Infinity Digital
			</a>
			<nav className={styles.nav}>
				<ul>
					{ListService.map((service) => (
						<li
							key={service.name}
							onClick={(event) => {
								handleClick(event);
								setServiceSelected(service);
							}}
						>
							<a href="/">{service.name}</a>
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
