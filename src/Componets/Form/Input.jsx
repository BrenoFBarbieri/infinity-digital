import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, name, error, ...props }) => {
	return (
		<div className={styles.container}>
			<label htmlFor={name}>{label}</label>
			<input type="text" name={name} id={name} {...props} />
			<span>{error}</span>
		</div>
	);
};

export default Input;
