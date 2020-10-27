
import React from 'react';
import './../CSS/Category_Card.scss';


const Category_Card = (props) => {
	return (
		<div className= 'container Category_Card'>
			<div className= 'row'>
				<div className= 'col-12 image'>
					<img src= {props.image} className= 'img-fluid' />

					<div className= 'text'>
						<h1> {props.text} </h1> <br />
						<button> Best New Deals </button> <br />
						<p> New Collection </p> <br />
					</div>
				</div>
			</div>
		</div>
		)
}


export default Category_Card;