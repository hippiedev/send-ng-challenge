import { h } from "preact";
import style from "./OrderInput.css";
import marker from "../../../assets/icons/marker.png";

function OrderInput(props) {
	return (
		<div className={style.OrderInputContainer}>
			<label className={style.location}>
				<img id={style.marker} src={marker} alt="" />
				<span>{props.to ? "To" : "From"}</span>
			</label>
			<input
				className={style.OrderInput}
				type="text"
				placeholder="City or port"
			/>
		</div>
	);
}

export default OrderInput;
