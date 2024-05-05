import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from './actions/actions'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Загрузка рецептов при монтировании компонента
    loadRecipes().then(setRecipes);
  }, []);

  const loadRecipes = async () => {
    try {
      const recipesJSON = await AsyncStorage.getItem('recipes');
      return recipesJSON != null ? JSON.parse(recipesJSON) : [];
    } catch (error) {
      console.error('Error loading recipes from AsyncStorage:', error);
      return [];
    }
  };

  const saveRecipes = async (recipes) => {
    try {
      const recipesJSON = JSON.stringify(recipes);
      await AsyncStorage.setItem('recipes', recipesJSON);
    } catch (error) {
      console.error('Error saving recipes to AsyncStorage:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe({ ...newRecipe, [name]: value });
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
        setNewRecipe({ ...newRecipe, image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleRecipeDelete = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
    saveRecipes(updatedRecipes);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addRecipe(newRecipe)); 
    const updatedRecipes = [...recipes, newRecipe];
    await saveRecipes(updatedRecipes); 
    setRecipes(updatedRecipes); 
    setNewRecipe({ title: '', ingredients: [], instructions: [], image: '', ingredientInput: '', instructionInput: '' });
  };

  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: [],
    instructions: [],
    image: '',
    ingredientInput: '', 
    instructionInput: '', 
  });

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
            onChange={(e) => setNewRecipe({ ...newRecipe, ingredientInput: e.target.value })} 
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
        <label>
          Instructions:
          <input
            type="text"
            name="instructionInput"
            value={newRecipe.instructionInput}
            onChange={(e) => setNewRecipe({ ...newRecipe, instructionInput: e.target.value })}
          />
          <button type="button" onClick={handleAddInstruction}>
            Add Instruction
          </button>
          <ol>
            {newRecipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </label>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          /> 
          {newRecipe.image && <img src={newRecipe.image} alt="Preview" />} 
        </label>
        <input type="submit" value="Add Recipe" />
      </form>
      <h2>Recipes</h2>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.title}</h3>
            <p>Ingredients:</p>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <p>Instructions:</p>
            <ol>
              {recipe.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
            {recipe.image && (
              <div>
                <img src={recipe.image} alt="Recipe" style={{ maxWidth: '100px' }} />
              </div>
            )}
                        <button onClick={() => handleRecipeDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeApp;