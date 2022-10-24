import React from "react";

import styles from "./Card.module.css";

const Card = ({ title, width, children, style }) => {
	return (
		<div
			className={"animeLeft " + styles.container}
			style={{ width: `${width}rem`, ...style }}
		>
			<h2 className={styles.title}>{title}</h2>
			{children}
		</div>
	);
};

export default Card;
