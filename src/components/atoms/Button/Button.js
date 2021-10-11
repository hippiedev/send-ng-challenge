import { h } from "preact";
import style from "./Button.css";

function Button(props) {
	const { children } = props;
	return <button style={{background: props.outlined ? 'none' : '#5cc58b', outline: props.outlined ? '2px solid #7299ce': 'none'}} className={style.Button}>{children}</button>;
}

export default Button;
