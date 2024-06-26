import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="menubtn">
      <button onClick={toggleSidebar}>
        {isSidebarVisible ? 'Скрыть меню' : 'Показать меню'}
      </button>
      {isSidebarVisible && (
        <aside>
        <p> Menu </p>
        <Link to="/page1">
          <i className="fa fa-user-o" aria-hidden="true"></i>
          Рецепт: Блины
        </Link>
    <Link to="/page2">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Рецепт: Курица с мандаринами
    </Link>
    <Link to="/page3">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Рецепт: Паста Карбонара
    </Link>
    <Link to="/page4">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Рецепт: Салат Нисуаз
    </Link>
    <Link to="/page5">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Рецепт: Паста Болоньезе
    </Link>
    <Link to="/page6">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Рецепт: Лазанья
    </Link>
    <Link to="/registration">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Регистрация
    </Link>
    {recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <i className="fa fa-laptop" aria-hidden="true"></i>
            Рецепт: {recipe.title}
          </Link>
        ))}
        <Link to="/recipeapp">
          <i className="fa fa-laptop" aria-hidden="true"></i>
          Создай свой
        </Link>
        </aside>
      )}
    </div>
  );
}

export default Sidebar;