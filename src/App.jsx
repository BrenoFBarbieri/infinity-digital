import React from "react";

import styles from "./App.module.css";
import Header from "./Componets/Header";
import BMI from "./Componets/Calculator/Bmi";

function App() {
	return (
		<section className={styles.container}>
			<Header />
			<div className={styles.content}>
				<BMI />
			</div>
		</section>
	);
}

export default App;
