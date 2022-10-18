import React from "react";

import styles from "./Card.module.css";

const Card = ({ title, children }) => {
	return (
		<div className={"animeLeft " + styles.container}>
			<h1 className={styles.title}>{title}</h1>
			{children}
		</div>
	);
};

export default Card;
