import React from 'react';
import { render } from 'react-dom';
import css from './index.css';

function Attribution(props) {
	return (<p>
		started off by <a href="https://github.com/rlaskey/start-react">
			Richard Laskey
		</a>.
	</p>);
}

class App extends React.Component {
	render () {
		return (<main>
			<h1>Your Words Here.</h1>
			<Attribution />
		</main>);
	}
}

render(<App/>, document.getElementById('root'));
