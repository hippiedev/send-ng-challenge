import { h } from "preact";
import MaterialInput from "../../../atoms/MaterialInput/MaterialInput";
import Switch from "../../../atoms/Switch/Switch";
import style from "./CargoDetails.css";

function CargoDetails() {
	return (
		<div className={style.CargoDetails}>
			<div className={style.InfoWrap}>
				{" "}
				<h2>Cargo Details</h2>
				<span className={style.CargoType}>
					<Switch />
					<span>Dangerous cargo (ex. Chemicals, Battery)</span>
				</span>
			</div>
			<div className={style.CargoDetailsForm}>
				<div className={style.FormNav}>
					<li className={[style.FormNavItem, style.active].join(" ")}>
						Total Dimensions
					</li>
					<li className={style.FormNavItem}>Package Details</li>
				</div>
				<div className={style.FormInput}>
					<MaterialInput metric="volume" />
					<MaterialInput metric="weight" />
				</div>
			</div>
		</div>
	);
}

export default CargoDetails;
