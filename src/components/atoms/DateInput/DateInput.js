import { h } from "preact";
import style from "./DateInput.css";
import plannerIcon from "../../../assets/icons/planner.png";

function DateInput() {
	return (
		<div className={style.DateInputContainer}>
			<label className={style.planner}>
				<img src={plannerIcon} alt="" />
			</label>
			<input className={style.DateInput} type="text" placeholder="Ready Date" />
		</div>
	);
}

export default DateInput;
