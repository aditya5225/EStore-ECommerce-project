
import React from 'react';
import './../CSS/Banner1.scss';
import Banner1_img from './../Image/hero_man.png';


const Banner1 = () => {
	return (
		<div className= 'container-fluid Banner1'>
			<div className= 'row'>
				<div className= 'col-0 col-sm-0 col-md-7 col-lg-7 col-xl-7 image'>
					<img src= {Banner1_img} className= 'img-fluid' />
				</div>

				<div className= 'col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 text'>
					<div>
						<h3> 60% Discount </h3>
						<h1> Winter Collection </h1>
						<p> Best Cloth Collection By 2020 </p>
						<button> <span> </span> Shop Now  </button>
					</div>
				</div>
			</div>
		</div>
		)
}


export default Banner1;