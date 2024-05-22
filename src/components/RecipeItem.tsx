import React, { Component } from 'react';
import { Recipe } from '../types'; 

interface RecipeItemProps {
  recipe: Recipe;
  onDelete: (recipeId: string) => void;
}

class RecipeItem extends Component<RecipeItemProps> {
  render() {
    const { recipe, onDelete } = this.props;

    return (
      <div key={recipe.id}>
        <h3>{recipe.title}</h3>
        <p>Ingredients:</p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>Instructions:</p>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <img src={recipe.image} alt={recipe.title} />
        <button onClick={() => onDelete(recipe.id)}>Delete</button>
      </div>
    );
  }
}

export default RecipeItem;