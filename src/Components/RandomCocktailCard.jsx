import React, { useState, useEffect } from 'react';
import '../Stylesheets/RandomCocktailCard.css';
import FullscreenCocktailCard from './FullscreenCocktailCard';

function RandomCocktailCard({ refreshCocktail, refreshTest }) {
	const [randomCocktail, setRandomCocktail] = useState('');
	const [show, setShow] = useState(false);

	const COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

	useEffect(() => {
		fetch(COCKTAIL_URL)
			.then((res) => res.json())
			.then((data) => setRandomCocktail(data.drinks[0]));
	}, [refreshCocktail]);

	function article() {
		if (!randomCocktail) return;

		const vowels = ['a', 'e', 'i', 'o', 'u', 'h'];
		const firstLetter = randomCocktail.strGlass.charAt().toLowerCase();

		return vowels.includes(firstLetter) ? 'an' : 'a';
	}

	function ingredientsAndMeasures() {
		if (!randomCocktail) return;

		const ingredients = Object.entries(randomCocktail)
			.filter(([key, value]) => key.startsWith('strIngredient') && value)
			.map(([key, value]) => value);

		const measures = Object.entries(randomCocktail)
			.filter(([key, value]) => key.startsWith('strMeasure') && value)
			.map(([key, value]) => value);

		const final = ingredients.map((ingredient, index) =>
			measures[index] ? `${ingredient} (${measures[index].trim()})` : ingredient
		);

		return final;
	}

	return (
		<>
			<div
				className="cardContainer small"
				onClick={() => {
					setShow(!show);
				}}
			>
				<h1 className="drinkName small">{randomCocktail.strDrink}</h1>
				<p className="category small">
					{randomCocktail.strCategory} ({randomCocktail.strAlcoholic})
				</p>
				<p className="serve small">
					Serve in {article()}
					{randomCocktail && randomCocktail.strGlass.toLowerCase()}
				</p>
				<img
					className="drinkImage small"
					src={randomCocktail.strDrinkThumb}
					alt={randomCocktail.strDrink}
				/>
				<ul className="ingredientList small">
					Ingredients:
					{ingredientsAndMeasures()?.map((item, index) => (
						<li className="ingredient small" key={index}>
							{item}
						</li>
					))}
				</ul>
				<p className="instructions small">
					Instructions: {randomCocktail.strInstructions}
				</p>
			</div>
			<FullscreenCocktailCard
				show={show}
				setShow={setShow}
				randomCocktail={randomCocktail}
				article={article()}
				ingredientsAndMeasures={ingredientsAndMeasures()}
			/>
		</>
	);
}

export default RandomCocktailCard;
