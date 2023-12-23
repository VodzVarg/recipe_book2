import React, { useState } from 'react';
import image from './img/th.jpeg';

function Page1() {
  const [recipes, setRecipes] = useState([
    {
      title: 'Блины',
      ingredients: ['Мука - 2 стакана', 'Молоко - 3 стакана', 'Яйца - 2 шт.', 'Сахар - 2 ст. ложки', 'Соль - 1/2 ч. ложки', 'Растительное масло - 3 ст. ложки'],
      instructions: ['Взбейте яйца с сахаром и солью.', 'Добавьте молоко и хорошо перемешайте.', 'Постепенно добавляйте муку, постоянно помешивая, чтобы избежать комков.', 'Добавьте растительное масло и хорошо перемешайте.', 'Разогрейте сковороду и вылейте на нее небольшое количество теста.', 'Жарьте блин до золотистого цвета с обеих сторон.', 'Повторите процесс, пока не закончится тесто.']
    }
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleEditRecipe = (index) => {
    setEditingIndex(index);
    setEditingRecipe(recipes[index]);
  };

  const handleSaveRecipe = () => {
    setRecipes(recipes.map((recipe, i) => i === editingIndex ? editingRecipe : recipe));
    setEditingIndex(null);
    setEditingRecipe(null);
  };

  const handleChangeRecipe = (event) => {
    setEditingRecipe({ ...editingRecipe, [event.target.name]: event.target.value });
  };

  return (
    <div className="content">
      {recipes.map((recipe, index) => (
        <React.Fragment key={index}>
          {editingIndex === index ? (
            <div>
              <input type="text" name="title" value={editingRecipe.title} onChange={handleChangeRecipe} />
              <textarea name="ingredients" value={editingRecipe.ingredients} onChange={handleChangeRecipe} />
              <textarea name="instructions" value={editingRecipe.instructions} onChange={handleChangeRecipe} />
              <button onClick={handleSaveRecipe}>Сохранить</button>
            </div>
          ) : (
            <div>
              <h1>{recipe.title}</h1>
              <img src={image} alt={recipe.title} />
              <p>{recipe.ingredients}</p>
              <p>{recipe.instructions}</p>
              <button onClick={() => handleEditRecipe(index)}>Редактировать</button>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Page1;