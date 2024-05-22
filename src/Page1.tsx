import React, { useState } from 'react';
import image from './img/th.jpeg';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
}

const Page1: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      title: 'Блины',
      ingredients: ['Мука - 2 стакана', 'Молоко - 3 стакана', 'Яйца - 2 шт.', 'Сахар - 2 ст. ложки', 'Соль - 1/2 ч. ложки', 'Растительное масло - 3 ст. ложки'],
      instructions: ['Взбейте яйца с сахаром и солью.', 'Добавьте молоко и хорошо перемешайте.', 'Постепенно добавляйте муку, постоянно помешивая, чтобы избежать комков.', 'Добавьте растительное масло и хорошо перемешайте.', 'Разогрейте сковороду и вылейте на нее небольшое количество теста.', 'Жарьте блин до золотистого цвета с обеих сторон.', 'Повторите процесс, пока не закончится тесто.'],
    },
  ]);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingRecipe) { // Null check!
      const { name, value } = event.target;
      if (name === 'ingredients' || name === 'instructions') {
        setEditingRecipe({
          ...editingRecipe,
          [name]: value.split('\n'),
        });
      } else {
        setEditingRecipe({ ...editingRecipe, [name]: value });
      }
    }
  };
  
  const handleSaveRecipe = () => {
    if (editingIndex !== null && editingRecipe) {
      const updatedRecipes = [...recipes];
      updatedRecipes[editingIndex] = editingRecipe;
      setRecipes(updatedRecipes);
      setEditingRecipe(null);
      setEditingIndex(null);
    }
  };

  const handleEditRecipe = (index: number) => {
    setEditingRecipe(recipes[index]);
    setEditingIndex(index);
  };

  return (
    <div className="content">
      {recipes.map((recipe, index) => (
        <React.Fragment key={index}>
          {editingIndex === index ? (
    <div>
    <input type="text" name="title" value={editingRecipe?.title || ''} onChange={handleChange} /> {/* Note: editingRecipe?.title || '' */}
    <textarea name="ingredients" value={editingRecipe?.ingredients.join('\n') || ''} onChange={handleChange} />
    <textarea name="instructions" value={editingRecipe?.instructions.join('\n') || ''} onChange={handleChange} />
    <button onClick={handleSaveRecipe}>Сохранить</button>
  </div>
          ) : (
            <div>
              <h1>{recipe.title}</h1>
              <img src={image} alt={recipe.title} />
              <p>{recipe.ingredients.join(', ')}</p>
              <p>{recipe.instructions.join('. ')}</p>
              <button onClick={() => handleEditRecipe(index)}>Редактировать</button>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Page1;