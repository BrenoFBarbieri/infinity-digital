import React from "react";

import styles from "./Presentation.module.css";

import Card from "./Card";

const Presentation = () => {
	return (
		<Card title="Seja bem-vindo a nossa plataforma!">
			<div className={styles.container}>
				<section>
					<p>
						A <b>Infinity Digital</b> tem como missão facilitar o
						seu dia a dia junto com um belo visual para atender seus
						problemas com estilo!
					</p>
					<h3>Importante!</h3>
					<p>
						Não cobramos o uso da plataforma porquê acreditamos que
						todos devem ter o direito de facilitar a sua vida, com
						isso contamos com a colaboração de vocês para ajudar a
						manter a aplicação no ar e a todo vapor.
					</p>
				</section>
				<section>
					<p>
						Pix para contribuição: <b>breno_barbieri@hotmail.com</b>
					</p>
				</section>
			</div>
		</Card>
	);
};

export default Presentation;
