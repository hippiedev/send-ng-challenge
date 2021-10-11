import { h, Component } from "preact";
import BookingForm from "./BookingForm/BookingForm";

export default class App extends Component {
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
			<div id="app">
				<BookingForm />
			</div>
		);
	}
}
