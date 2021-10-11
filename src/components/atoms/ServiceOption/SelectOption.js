import { h, Component } from "preact";
import style from "./SelectOption.css";

export default class SelectOption extends Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
		this.handleActiveState = this.handleActiveState.bind(this);
	}
	handleActiveState() {
		this.setState({ active: !this.state.active });
	}
	render() {
		const { service } = this.props;
		let optionName, icon;
		switch (service) {
			case "air":
				optionName = "Air Freight";
				icon = "fas fa-plane";
				break;
			case "sea":
				optionName = "Sea Freight";
				icon = "fas fa-ship";
				break;
			case "inland":
				optionName = "Inland (Truck & Barge)";
				icon = "fas fa-truck";
				break;
			case "customs":
				optionName = "Customs Clearance";
				icon = "fas fa-user-shield";
				break;
			default:
				return null;
		}
		return (
			<div
				onClick={this.handleActiveState}
				style={{
					background: this.state.active ? "#0746a7" : "#fff",
					outline: this.state.active ? "none" : "1px solid #c4c4c4"
				}}
				className={style.SelectOption}
			>
				<span
					style={{ color: this.state.active ? "#fff" : "#9b9b9b" }}
					className={style.OptionName}
				>
					{optionName}
				</span>
				<i
					style={{ color: this.state.active ? "#fff" : "#81868C" }}
					id={service === "air" ? style.Plane : style.ServiceIcon}
					className={icon}
				/>
			</div>
		);
	}
}
