
import React from 'react';
import Logo from './Image/Logo.png';
import './CSS/Navigation.scss';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Navigation = () => {
	return (
		<nav className="navigation navbar navbar-expand-lg navbar-light">
			<a className="navbar-brand navigation_left" href="#">
				<img src= {Logo} />
			</a>

			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse navigation_middle" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#"> Home <span className="sr-only">(current)</span></a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#"> Category </a>
					</li>

					<li className="nav-item dropdown">
						<a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Latest </a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>

					<li className="nav-item dropdown">
						<a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Blog </a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>

					<li className="nav-item dropdown">
						<a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Pages </a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#"> Contact </a>
					</li>
				</ul>
			</div>

			<div className= 'navigation_right'>
				<form className="search form-inline my-2 my-lg-0 border">
					<input className="form-control" placeholder="Search Products" aria-label="Search" />
					<button className="btn" type="submit"> <SearchIcon /> </button>
				</form>

				<div className= 'tools'>
					<button className= 'border wishlist'> <FavoriteBorderIcon  className= 'icon'/> </button>
					<button className= 'border cart'> <ShoppingCartIcon  className= 'icon'/> </button>
					<button className= 'sign_in'> <span> </span> Sign In </button>
				</div>
			</div>
		</nav>
		)
}


export default Navigation;