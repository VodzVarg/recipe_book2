// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Добавьте этот импорт
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
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
    <Link to="/registration">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Регистрация
    </Link>
    <Link to="/recipeapp">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Создай свой
    </Link>
    
    </aside>
    </div>
  );
}

export default Sidebar;