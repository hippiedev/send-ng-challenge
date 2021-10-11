import { h } from "preact";
import style from "./SearchInput.css";
import icon from '../../../assets/icons/search.png';

function SearchInput() {
	return (
		<div className={style.searchIconContainer}>
			<input type="search" placeholder="search" className={style.SearchInput} />
			<label className={style.searchIcon}><img src={icon} alt="" /></label>
		</div>
	);
}

export default SearchInput;
