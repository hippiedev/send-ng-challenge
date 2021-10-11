import { h } from "preact";
import style from "./Input.css";

function Input() {
	return <input type="number" className={style.Input} placeholder="Total Cargo value" />;
}

export default Input;
