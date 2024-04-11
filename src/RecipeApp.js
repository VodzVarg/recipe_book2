import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, editRecipe, deleteRecipe } from './actions/actions'; 
// ... other imports

function RecipeApp({ isAdmin }) {
    const recipes = useSelector((state) => state.recipes);
    const dispatch = useDispatch();
  
    const [editMode, setEditMode] = useState({
      index: null,
      title: '',
      ingredients: [],
      instructions: [],
      image: '',
    });
  
    const [newRecipe, setNewRecipe] = useState({
      title: '',
      ingredients: [],
      instructions: [],
      image: '',
      ingredientInput: '', // Input for adding ingredients
      instructionInput: '', // Input for adding instructions
    });
  

   // handleChange functions for BOTH editMode and newRecipe
   const handleChange = (event) => {
    const { name, value } = event.target;
    if (editMode.index !== null) {
      setEditMode({ ...editMode, [name]: value });
    } else {
      setNewRecipe({ ...newRecipe, [name]: value });
    }
  };

  const handleIngredientChange = (event) => {
    setNewRecipe({ ...newRecipe, ingredientInput: event.target.value });
  };

  const handleInstructionChange = (event) => {
    setNewRecipe({ ...newRecipe, instructionInput: event.target.value });
  };

  const handleAddIngredient = () => {
    if (newRecipe.ingredientInput.trim() !== '') {
      setNewRecipe((prevState) => ({
        ...prevState,
        ingredients: [...prevState.ingredients, prevState.ingredientInput],
        ingredientInput: '', 
      }));
    }
  };

  const handleAddInstruction = () => {
    if (newRecipe.instructionInput.trim() !== '') {
      setNewRecipe((prevState) => ({
        ...prevState,
        instructions: [...prevState.instructions, prevState.instructionInput],
        instructionInput: '', 
      }));
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (editMode.index !== null) {
          setEditMode({ ...editMode, image: e.target.result });
        } else {
          setNewRecipe({ ...newRecipe, image: e.target.result });
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleEditClick = (index) => {
    const recipe = recipes[index];
    setEditMode({
      index,
      title: recipe.title,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      image: recipe.image,
    });
  };

  const handleSaveEdit = () => {
    const updatedRecipe = { ...editMode }; 
    dispatch(editRecipe(editMode.index, updatedRecipe));
    setEditMode({ index: null, title: '', ingredients: [], instructions: [], image: '' }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(newRecipe)); 
    setNewRecipe({ title: '', ingredients: [], instructions: [], image: '', ingredientInput: '', instructionInput: '' }); 
  };

  return (
    <div className="content">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newRecipe.title} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            name="ingredientInput"
            value={newRecipe.ingredientInput} 
            onChange={handleIngredientChange} 
          />
          <button type="button" onClick={handleAddIngredient}>
            Add Ingredient
          </button>
          <ul>
            {newRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </label>
        {/* Similar label for instructions */}

        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          /> 
          {/* Display the image if it exists */}
          {newRecipe.image && <img src={newRecipe.image} alt="Preview" />} 
        </label>

        {isAdmin ? (
          <input type="submit" value="Add Recipe" />
        ) : (
          <button disabled style={{ cursor: 'not-allowed' }}>
            Add Recipe (Admin Only)
          </button>
        )}
      </form>

      <h2>Recipes</h2>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            {/* ... (editing logic and recipe display - same as before) */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeApp;