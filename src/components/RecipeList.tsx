import React, { Component } from 'react';
import { Recipe } from '../types'; 
import RecipeItem from './RecipeItem'; 

interface RecipeListProps {
  recipes: Recipe[];
  onDelete: (recipeId: string) => void;
}

class RecipeList extends Component<RecipeListProps> {
  render() {
    const { recipes, onDelete } = this.props;

    return (
      <div>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}

export default RecipeList;