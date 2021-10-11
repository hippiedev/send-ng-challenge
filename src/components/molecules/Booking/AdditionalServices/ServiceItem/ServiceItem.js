import { h } from "preact";
import Switch from "../../../../atoms/Switch/Switch";
import style from "./ServiceItem.css";

function ServiceItem(props) {
	const { service } = props;
	let serviceTitle;
	let serviceDescription;

	switch (service) {
		case "export":
			serviceTitle = "Export Forwarding";
			serviceDescription = "We handle customs clearance and documentation";
			break;
		case "import":
			serviceTitle = "Import customs clearance";
			serviceDescription =
				"We handle import customs and regulatory requirements";
			break;
		case "insurance":
			serviceTitle = "Cargo insurance";
			serviceDescription =
				"Protect your cargo from logistics risks up to its full value";
			break;
		case "transport":
			serviceTitle = "Transport / Delivery";
			serviceDescription =
				"We deliver the cargo to your door steps from the port";
			break;
		default:
			return null;
	}

	return (
		<div className={style.ServiceItem}>
			<span className={style.SwitchWrap}>
				<Switch />
			</span>
			<span className={style.ServiceInfo}>
				<h2>{serviceTitle}</h2>
				<p>{serviceDescription}</p>
			</span>
		</div>
	);
}

export default ServiceItem;
