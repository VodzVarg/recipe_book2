export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  payload: recipe,
});
  
  export const editRecipe = (index, updatedRecipe) => ({
    type: 'EDIT_RECIPE',
    payload: { index, updatedRecipe },
  });
  
  export const handleDeleteRecipe = (index) => ({
    type: 'DELETE_RECIPE',
    payload: index,
  });