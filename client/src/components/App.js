import React from 'react';
import Sidebar from './Sidebar.js'
import AlertMessagesList from './alerts/AlertMessagesList.js'

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Sidebar />
				<div id="page-content-wrapper">
					<AlertMessagesList />
					<div className="container-fluid">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
