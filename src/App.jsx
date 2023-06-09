import { useState, useEffect } from 'react';
import './App.css'
import RandomCocktailCard from './Components/RandomCocktailCard';

function App() {
	const [refreshCocktail, setRefreshCocktail] = useState(false);

	const handleRefreshCocktail = () => {
	setRefreshCocktail(!refreshCocktail);
	};

	const [refreshTest, setRefreshTest] = useState(false);

	const handleRefreshTest = () => {
	setRefreshTest(!refreshTest);
	};

	return (
		<main>
			<header className="reroll" onClick={() => handleRefreshCocktail()}>Reroll?</header>
			<div className="container">
				<RandomCocktailCard refreshCocktail={refreshCocktail} refreshTest={refreshTest}/>
				<RandomCocktailCard refreshCocktail={refreshCocktail}/>
				<RandomCocktailCard refreshCocktail={refreshCocktail}/>
				<RandomCocktailCard refreshCocktail={refreshCocktail}/>
				<RandomCocktailCard refreshCocktail={refreshCocktail}/>
			</div>
		</main>
	);
}

export default App
