import { h } from "preact";
import SelectOption from "../../../atoms/ServiceOption/SelectOption";
import style from "./SelectService.css";

function SelectService() {
	return (
		<div className={style.SelectService}>
			<h2>Select a service</h2>
			<div class={style.SelectOptions}>
				<SelectOption service="air" />
				<SelectOption service="sea" />
				<SelectOption service="inland" />
				<SelectOption service="customs" />
			</div>
		</div>
	);
}

export default SelectService;
