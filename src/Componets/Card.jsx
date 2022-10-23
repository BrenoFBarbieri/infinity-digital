import React from "react";

import styles from "./Card.module.css";

const Card = ({ title, children }) => {
	return (
		<div className={"animeLeft " + styles.container}>
			<h2 className={styles.title}>{title}</h2>
			{children}
		</div>
	);
};

export default Card;
