import React from "react";

import styles from "./Bmi.module.css";
import Card from "../Card";
import Input from "../Form/Input";
import Button from "../Form/Button";

const Bmi = () => {
	const [height, setHeight] = React.useState(0);
	const [weight, setWeight] = React.useState(0);
	const [bmi, setBmi] = React.useState(0);
	const [classification, setClassification] = React.useState("");
	const [obesityGrade, setObesityGrade] = React.useState("");
	const [result, setResult] = React.useState(false);
	const [colorFeedback, setColorFeedback] = React.useState("var(--errors)");
	const [msgError, setMsgError] = React.useState(null);

	function testRegex(str) {
		const regex = /^[\d,.?!]+$/;
		if (regex.test(str)) return Number(str.replace(",", ".")).toFixed(2);
	}

	function handleInput({ target }) {
		const regex = testRegex(target.value);
		if (regex) {
			if (target.name === "height") {
				setHeight(() => regex);
			} else {
				setWeight(() => regex);
			}
		} else {
			target.value.length > 0 &&
				setMsgError("Insira somente números separados de . ou ,");
		}
	}

	function handleRanking(bmi) {
		switch (true) {
			case bmi < 18.5:
				setClassification("Magreza");
				setObesityGrade("0");
				setColorFeedback("var(--errors)");
				break;
			case bmi >= 18.5 && bmi <= 24.9:
				setClassification("Normal");
				setObesityGrade("0");
				setColorFeedback("var(--positive)");
				break;
			case bmi >= 25 && bmi <= 29.9:
				setClassification("Sobrepeso");
				setObesityGrade("I");
				setColorFeedback("var(--alert)");
				break;
			case bmi >= 30 && bmi <= 39.9:
				setClassification("Obesidade");
				setObesityGrade("II");
				setColorFeedback("var(--errors)");
				break;
			default:
				setClassification("Obesidade Grave");
				setObesityGrade("III");
				setColorFeedback("var(--errors)");
				break;
		}
		setResult(true);
	}

	function handleBmiCalc() {
		const result = Number((weight / (height * height)).toFixed(1));
		setBmi(result);
		return handleRanking(result);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (weight.length > 0 && height.length > 0) {
			handleBmiCalc();
			setMsgError(null);
		}
	}

	return (
		<section className={styles.container}>
			<Card title="Informe os Valores">
				<form className={styles.form} onSubmit={handleSubmit}>
					<Input
						label="Altura"
						name="height"
						type="text"
						required
						placeholder="Metros (m)"
						onChange={handleInput}
					/>
					<Input
						label="Peso"
						type="text"
						name="weight"
						id="weight"
						required
						placeholder="Quilogramas (kg)"
						onChange={handleInput}
						error={msgError}
					/>
					{weight > 0 && height > 0 ? (
						<Button style={{ marginTop: "1rem" }}>Calcular</Button>
					) : (
						<Button style={{ marginTop: "1rem" }} disabled>
							Calcular
						</Button>
					)}
				</form>
			</Card>
			{result && (
				<Card title="Resultado da Avaliação">
					<div className={styles.result}>
						<div style={{ background: colorFeedback }}>
							<p>Massa Corporal</p>
							<span>{bmi}</span>
						</div>
						<div style={{ background: colorFeedback }}>
							<p>Classificação</p>
							<span>
								{classification.length > 0
									? classification
									: "Sem Classificação"}
							</span>
						</div>
						<div style={{ background: colorFeedback }}>
							<p>Grau Obesidade</p>
							<span>
								{obesityGrade.length > 0
									? obesityGrade
									: "Sem Grau de Obesidade"}
							</span>
						</div>
					</div>
				</Card>
			)}
		</section>
	);
};

export default Bmi;
