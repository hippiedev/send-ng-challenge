import { h } from "preact";
import style from "./MaterialInput.css";

function MaterialInput(props) {
	const { metric } = props;
	return (
		<div className={style.MaterialInputContainer}>
			<label className={style.metric}>
				{metric === "volume" ? "Total volume" : "Total weight"}
			</label>
			<input type="number" className={style.MaterialInput} />
			<label className={style.unit}><span>{metric === "volume" ? "cbm" : "Kg"}</span></label>
		</div>
	);
}

export default MaterialInput;
