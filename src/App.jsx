import React from "react";

import styles from "./App.module.css";
import Header from "./Componets/Header";
import Application from "./Componets/Application";

function App() {
	return (
		<section className={styles.container}>
			<Header />
			<Application />
		</section>
	);
}

export default App;
