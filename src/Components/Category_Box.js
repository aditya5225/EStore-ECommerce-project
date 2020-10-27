import React from 'react';
import './../CSS/Category_Box.scss';
import Category_Card from './../Components/Category_Card';
import cat1 from './../Image/cat1.jpg';
import cat2 from './../Image/cat2.jpg';
import cat3 from './../Image/cat3.jpg';


const Category_Box = () => {
	return (
		<div className= 'container-fluid Category_Box'>
			<div className= 'row'>
				<div className= 'col-12 title'>
					<h1> Shop by Category </h1>
				</div>

				<div className= 'row'>
					<div className= 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4'>
						<Category_Card image= {cat1} text= {'Womens'} />
					</div>

					<div className= 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4'>
						<Category_Card image= {cat2} text= {'Womens'} />
					</div>

					<div className= 'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4'>
						<Category_Card image= {cat3} text= {'Womens'} />
					</div>
				</div>
			</div>
		</div>
		)
}


export default Category_Box;