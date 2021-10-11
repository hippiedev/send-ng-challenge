import { h } from "preact";
import style from "./OrderDetails.css";
import infoIcon from "../../../../assets/icons/info.png";
import OrderInput from "../../../atoms/OrderInput/OrderInput";
import DateInput from "../../../atoms/DateInput/DateInput";
import DropdownInput from "../../../atoms/DropdownInput/DropdownInput";
import Input from "../../../atoms/Input/Input";

function OrderDetails() {
	return (
		<div className={style.OrderDetails}>
			<div id={style.top}>
				<div className={style.infoWrap}>
					<img src={infoIcon} alt="" />
				</div>

				<div className={style.OrderDetailsForm}>
					<span className={style.ImportExport}>
						<span className={style.button}>Import</span>
						<span className={style.button}>Export</span>
					</span>
					<OrderInput />
					<OrderInput to />
				</div>
			</div>
			<div id={style.bottom}>
				<DateInput />
				<DropdownInput />
				<Input />
			</div>
		</div>
	);
}

export default OrderDetails;
