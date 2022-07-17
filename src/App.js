import './App.css';
import { useState } from 'react';
import List from './components/List';
import data from './config/data.jsx';

function App() {
	const [ people, setPeople ] = useState(data);

  //clear birthday function
	const handleClick = () => {
		setPeople([]);
	};
  //Add birthdays function
  const AddBirthday = () => {
		setPeople(...[data]);
	};
	return (
		<main className='App'>
			<div className='container'>
				<h3>{people.length} Birthdays Celebrants</h3>
				{people.length > 0 && (
					<div className='btn'>
						<List people={people} />
						<button className='btn' onClick={handleClick}>
							Clear all
						</button>
					</div>
				)}
				{people.length === 0 && (
					<div className='btn'>
						<h2>No Birthdays Today</h2> <br />
						<button className='btn' onClick={AddBirthday}>
							Add Birthdays
						</button>
					</div>
				)}
			</div>
		</main>
	);
}

export default App;
