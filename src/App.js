import logo from './logo.svg';
import './App.css';
import {Politics} from './Politics';

function App() {
	return (
		<div className="App">
			<header
				style={{
					backgroundColor: '#fff',
					padding: 5,
					marginTop: 50,
					marginBottom: 50
				}}
				className="App-header"
			>
				<Politics />
			</header>
		</div>
	);
}

export default App;
