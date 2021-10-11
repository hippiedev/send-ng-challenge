import { h } from "preact";
import Header from "../molecules/Booking/Header/Header";
import style from "./BookingForm.css";
import goBackIcon from "../../assets/icons/left.png";
import SelectService from "../molecules/Booking/SelectService/SelectService";
import OrderDetails from "../molecules/Booking/OrderDetails/OrderDetails";
import CargoDetails from "../molecules/Booking/CargoDetails/CargoDetails";
import AdditionalServices from "../molecules/Booking/AdditionalServices/AdditionalServices";
import mobile from "../../assets/icons/mobile.svg";

const BookingForm = () => {
	return (
		<div className="BookingForm">
			<Header />
			<span id={style.goBack}>
				<img src={goBackIcon} alt="" />
			</span>
			<main className={style.FormContent}>
				<div className={style.ContentHeader}>
					<h2>New Booking</h2>
					<p>Fill in the information to get a quote or create a new booking</p>
				</div>
				<SelectService />
				<OrderDetails />
				<CargoDetails />
				<AdditionalServices />
			</main>
			<main className={style.Mobile}>
				<img src={mobile} alt="" />
				<p>Can't display app. Please view on a PC</p>
			</main>
		</div>
	);
};

export default BookingForm;
