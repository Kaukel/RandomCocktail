import React, { useState } from 'react';
import '../Stylesheets/FullscreenCocktailCard.css';

function FullscreenCocktailCard({
	show,
	setShow,
	randomCocktail,
	article,
	ingredientsAndMeasures,
}) {
	return (
		<div
			className={`bigCardContainer ${show} big`}
			onClick={() => setShow(!show)}
		>
			<div className="bigFlexContainer big">
				<section className="side">
					<h1 className="bigDrinkName big">{randomCocktail.strDrink}</h1>
					<p className="bigCategory big">
						{randomCocktail.strCategory} ({randomCocktail.strAlcoholic})
					</p>
					<p className="bigServe big">
						Serve in {article}
						{randomCocktail && randomCocktail.strGlass.toLowerCase()}
					</p>
					<img
						className="bigDrinkImage big"
						src={randomCocktail.strDrinkThumb}
						alt={randomCocktail.strDrink}
					/>
				</section>
				<section className="side">
					<ul className="bigIngredientList big">
						Ingredients:
						{ingredientsAndMeasures?.map((item, index) => (
							<li className="bigIngredient big" key={index}>
								{item}
							</li>
						))}
					</ul>
					<p className="bigInstructions big">
						Instructions: {randomCocktail.strInstructions}
					</p>
				</section>
			</div>
		</div>
	);
}

export default FullscreenCocktailCard;
