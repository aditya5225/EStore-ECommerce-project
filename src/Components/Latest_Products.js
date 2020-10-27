
import React from 'react';
import './../CSS/Latest_Products.scss';
import Product_Card from './../Components/Product_Card';


const Latest_Products = () => {
	return (
		<div className= 'container-fluid Latest_Products'>
			<div className= 'row title'>
				<div className= 'col-12'>
					<h1> Latest Products </h1>
				</div>
			</div>

			<div className= 'row cards'>
				<div className= 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
					<Product_Card />
				</div>

				<div className= 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
					<Product_Card />
				</div>

				<div className= 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
					<Product_Card />
				</div>

				<div className= 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
					<Product_Card />
				</div>
			</div>
		</div>
		)
}


export default Latest_Products;