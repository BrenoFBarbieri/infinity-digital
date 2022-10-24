import React from "react";

import { ListService } from "../ListServices";

import styles from "./Application.module.css";

import Presentation from "./Presentation";

const Application = ({ serviceSelected }) => {
	function handleRenderApp() {
		const { component } = ListService.find(
			({ id }) => id === serviceSelected.id
		);
		return component;
	}

	return (
		<section className={styles.content}>
			<h1 className="animeLeft">
				{serviceSelected
					? serviceSelected.title
					: "Seja bem vindo a plataforma"}
			</h1>
			{serviceSelected ? handleRenderApp() : <Presentation />}
		</section>
	);
};

export default Application;
