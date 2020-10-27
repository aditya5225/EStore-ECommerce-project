
import React from 'react';
import './CSS/Header.scss';
import Flag from './Image/india-flag-icon.jpg';



const Header = () => {
	return (
		<div className= 'header container-fluid'>
			<div className= 'row'>
				<div className= 'col-5 header_left'>
					<img src= {Flag} className= 'flag img-fluid' />

					<select>
						<option> USA </option>
						<option> SPN </option>
						<option> CDA </option>
						<option> USD </option>
					</select>

					<p> +777 2345 7886 </p>
				</div>

				<div className= 'col-7 header_right'>
					<ul className= ''>
						<li> My Account </li>
						<li> Wish List </li>
						<li> Shopping </li>
						<li> Cart </li>
						<li> Checkout </li>
					</ul>
				</div>
			</div>
		</div>
		)
}


export default Header;