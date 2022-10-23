import React from "react";

import styles from "./App.module.css";
import Header from "./Componets/Header";
import BMI from "./Componets/Calculator/Bmi";

function App() {
	return (
		<section className={styles.container}>
			<Header />
			<div className={styles.content}>
				<h1>Calculadora Índice de Massa Corporal (IMC)</h1>
				<BMI />
			</div>
		</section>
	);
}

export default App;
