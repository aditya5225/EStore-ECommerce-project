import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Pages/Home';


const App = () => {
	return (
		<div className= 'container-fluid'>
			<Header />
			<Navigation />
			<Home />
		</div>
		)
}


export default App;