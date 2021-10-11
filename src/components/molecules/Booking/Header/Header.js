import { h } from "preact";
import style from "./Header.css";
import SearchInput from "../../../atoms/SearchInput/SearchInput";
import Button from "../../../atoms/Button/Button";

const Header = () => {
	return (
		<div className={style.Header}>
			<div className={style.HeaderSearch}>
				<div className={style.logo}>
					<span>send</span> FREIGHT
				</div>
				<div className={style.HeaderSearch}>
					<SearchInput />
				</div>
			</div>
			<div className={style.HeaderControls}>
				<Button outlined>Request quote</Button>
				<Button>Book shipment</Button>
			</div>
		</div>
	);
};

export default Header;
