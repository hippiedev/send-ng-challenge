import { h } from "preact";
import style from "./DropdownInput.css";
import caretIcon from "../../../assets/icons/dropdown.png";

function DropdownInput() {
	return (
		<div className={style.DropdownInputContainer}>
			<input
				className={style.DropdownInput}
				type="text"
				placeholder="Incoterms"
			/>
			<label className={style.caret}>
				<img src={caretIcon} alt="" id={style.caretIcon} />
			</label>
		</div>
	);
}

export default DropdownInput;
