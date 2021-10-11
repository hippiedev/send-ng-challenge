import { h, Component } from "preact";
import SwitchUI from "react-switch";
import './Switch.css';

export default class Switch extends Component {
	constructor(props) {
		super(props);
		this.state = { checked: false };
		this.handleChange = this.handleChange.bind(this);
	  }
	
	  handleChange(checked) {
		this.setState({ checked });
	  }
	render() {
		return (
			<div id="Switch">
				<SwitchUI activeBoxShadow="0 0 2px 3px #0746a750" handleDiameter={20} onColor="#0746a7" offColor="#d5d5d5" height={24} width={45} className="react-switch" onChange={this.handleChange} checked={this.state.checked} checkedIcon={false} uncheckedIcon={false}/>
			</div>
		);
	}
}
