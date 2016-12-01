import React from 'react';
import FlashMessagesList from './FlashMessagesList.js'

const divStyle = {
	padding: "10px"
};

class App extends React.Component {
	render() {
		return (
			<div>
			<div className="row"><div className="col-lg-3"></div>
			<div className="col-lg-6">
			<FlashMessagesList />
			</div></div>
		  {this.props.children}
			</div>
		);
	}
}

export default App;
