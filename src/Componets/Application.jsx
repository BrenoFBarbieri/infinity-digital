import React from "react";

import styles from "./Application.module.css";

import Presentation from "./Presentation";
// import BMI from "./Calculator/Bmi";

const Application = () => {
	return (
		<section className={styles.content}>
			<h1 className="animeLeft">Seja bem vindo a plataforma</h1>
			<Presentation />
			{/* <BMI /> */}
		</section>
	);
};

export default Application;
