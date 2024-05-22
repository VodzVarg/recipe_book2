import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Recipe, RecipeState } from '../types';
import RecipeList from './RecipeList';
import { addRecipe, deleteRecipe } from '../actions/recipeActions'; 

interface RecipeAppState extends RecipeState {
  recipes: Recipe[];
}

interface RecipeAppProps {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  deleteRecipe: (recipeId: string) => void;
}

class RecipeApp extends Component<RecipeAppProps> {
  state = {
    recipes: this.props.recipes, // Initialize recipes from props
    newRecipe: {
      title: '',
      ingredients: [],
      instructions: [],
      image: '',
      ingredientInput: '',
      instructionInput: '',
    },
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState, // Preserve existing state properties
      newRecipe: {
        ...prevState.newRecipe, 
        [name]: value,
      },
    }));
  };

  handleAddIngredient = () => {
    const { ingredientInput, ingredients } = this.state.newRecipe;
    if (ingredientInput.trim() !== '') {
      this.setState(prevState => ({
        ...prevState, // Preserve existing state properties
        newRecipe: {
          ...prevState.newRecipe,
          ingredients: [...ingredients, ingredientInput],
          ingredientInput: '',
        },
      }));
    }
  };

  handleAddInstruction = () => {
    const { instructionInput, instructions } = this.state.newRecipe;
    if (instructionInput.trim() !== '') {
      this.setState(prevState => ({
        ...prevState, // Preserve existing state properties
        newRecipe: {
          ...prevState.newRecipe,
          instructions: [...instructions, instructionInput],
          instructionInput: '',
        },
      }));
    }
  };

  handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) { // Check for non-null target
          this.setState(prevState => ({
            ...prevState, // Preserve existing state properties
            newRecipe: {
              ...prevState.newRecipe,
              image: e.target.result as string,
            },
          }));
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { newRecipe } = this.state;
    // Add an id to your newRecipe before dispatching it 
    const newRecipeWithId = { ...newRecipe, id: Date.now().toString() };
    this.props.addRecipe(newRecipeWithId); 
    this.setState({ 
      newRecipe: {
        title: '',
        ingredients: [],
        instructions: [],
        image: '',
        ingredientInput: '',
        instructionInput: '',
      },
    });
  };

  render() {
    const { newRecipe } = this.state;
    const { recipes } = this.props;

    return (
      <div className="content">
        <h1>Add Recipe</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              id="title"
              name="title"
              value={newRecipe.title}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="ingredients">
            Ingredients:
            <input
              type="text"
              id="ingredientInput"
              name="ingredientInput"
              value={newRecipe.ingredientInput}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleAddIngredient}>
              Add Ingredient
            </button>
            <ul>
              {newRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </label>
          <label htmlFor="instructions">
            Instructions:
            <input
              type="text"
              id="instructionInput"
              name="instructionInput"
              value={newRecipe.instructionInput}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleAddInstruction}>
              Add Instruction
            </button>
            <ol>
              {newRecipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </label>
          <label htmlFor="image">
            Image:
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={this.handleImageChange}
            />
            {newRecipe.image && <img src={newRecipe.image} alt="Preview" />}
          </label>
          <input type="submit" value="Add Recipe" />
        </form>
        <h2>Recipes</h2>
        <RecipeList recipes={recipes} onDelete={this.props.deleteRecipe} />
      </div>
    );
  }
}

const mapStateToProps = (state: RecipeAppState) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addRecipe: (recipe: Recipe) => dispatch(addRecipe(recipe)),
  deleteRecipe: (recipeId: string) => dispatch(deleteRecipe(recipeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);