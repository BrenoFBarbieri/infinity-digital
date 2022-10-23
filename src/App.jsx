import React from "react";

import styles from "./App.module.css";
import Header from "./Componets/Header";
import Application from "./Componets/Application";

function App() {
	const [serviceSelected, setServiceSelected] = React.useState(null);

	return (
		<section className={styles.container}>
			<Header setServiceSelected={setServiceSelected} />
			<Application serviceSelected={serviceSelected} />
		</section>
	);
}

export default App;
