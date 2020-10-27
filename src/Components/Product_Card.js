
import React from 'react';
import './../CSS/Product_Card.scss';
import Product1 from './../Image/product1.png';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const Product_Card = () => {
	return (
		<div className= 'container-fluid Product_Card'>
			<div className= 'row card_image'>
				<div className= 'col-12'>
					<img src= {Product1} />
				</div>
			</div>


			<div className= 'row card_body'>
				<div className= 'col-12'>
					<div>
						<StarBorderIcon className= 'icon' style= {{color: '#FFBC1E'}} />
						<StarBorderIcon className= 'icon' style= {{color: '#FFBC1E'}} />
						<StarBorderIcon className= 'icon' style= {{color: '#FFBC1E'}} />
						<StarBorderIcon className= 'icon' style= {{color: 'grey'}} />
						<StarBorderIcon className= 'icon' style= {{color: 'grey'}} />
					</div>

					<h1> Green Dress with details </h1>
					<p> $40.00 <span> $60.00 </span> </p>
				</div>
			</div>
		</div>
		)
}


export default Product_Card;