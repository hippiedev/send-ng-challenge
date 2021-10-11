import { h } from "preact";
import style from "./AdditionalServices.css";
import ServiceItem from "./ServiceItem/ServiceItem";

function AdditionalServices() {
	return (
		<div className={style.AdditionalServices}>
			<h2>Additional Services</h2>
			<div className={style.ServiceList}>
				<ServiceItem service="export" />
				<ServiceItem service="import" />
				<ServiceItem service="insurance" />
				<ServiceItem service="transport" />
			</div>
		</div>
	);
}

export default AdditionalServices;
