import React, { useState } from 'react';
import image from './img/chicken.jpg'; // Путь к вашему изображению

function Page2() {
  const [recipes, setRecipes] = useState([
    {
      title: 'Курица с мандаринами',
      ingredients: ['Курица - 1 шт.', 'Мандарины - 4 шт.', 'Соевый соус - 3 ст. ложки', 'Мед - 2 ст. ложки', 'Чеснок - 2 зубчика', 'Соль, перец - по вкусу'],
      instructions: ['Нарежьте курицу на порционные куски, посолите и поперчите.', 'Смешайте соевый соус, мед и измельченный чеснок, залейте этим маринадом курицу и оставьте на 30 минут.', 'Обжарьте курицу с каждой стороны до золотистого цвета.', 'Добавьте мандарины, нарезанные дольками, и тушите под крышкой 20-30 минут.', 'Подавайте горячим.']
    }
  ]);
  const [search, setSearch] = useState('');

  const handleAddRecipe = () => {
    const newRecipe = {
      title: `Новый рецепт ${recipes.length + 1}`,
      ingredients: ['Ингредиент 1', 'Ингредиент 2'],
      instructions: ['Шаг 1', 'Шаг 2']
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };

  const handleEditRecipe = (index) => {
    const updatedRecipe = {
      ...recipes[index],
      title: `Обновленный рецепт ${index + 1}`
    };
    setRecipes(recipes.map((recipe, i) => i === index ? updatedRecipe : recipe));
  };

  const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="content">
      <button onClick={handleAddRecipe}>Добавить рецепт</button>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Поиск..." />
      {filteredRecipes.map((recipe, index) => (
        <React.Fragment key={index}>
          <h1>{recipe.title}</h1>
          <img src={image} alt={recipe.title} />
          <h2>Ингредиенты:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
          </ul>
          <h2>Инструкции:</h2>
          <ol>
            {recipe.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)}
          </ol>
          <button onClick={() => handleEditRecipe(index)}>Редактировать</button>
          <button onClick={() => handleDeleteRecipe(index)}>Удалить</button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Page2;