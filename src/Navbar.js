import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';  

function Navbar() {
  return (
    <nav className="top">
      <div class="header-container">
    <div class="header-content">
        <div class="header-left">
            <span class="header-heart">♡</span>
            <span class="header-title">1000 МЕНЮ</span>
        </div>
        <div class="header-search">
            <input type="text" placeholder="Поиск" class="header-search-input" />
            <span class="header-search-icon">🔍</span>
        </div>
        <div class="header-menu">
        <Link to="/recipeapp" className="span">
          <i className="fa fa-laptop" aria-hidden="true"></i>
        Добавить рецепт
      </Link>
            <span>Каналы</span>
            <span>Работа</span>
            <span>Конкурсы</span>
            <button class="header-button-add">+ Добавить...</button>
            <Link to="/registration" className="button">
        <i className="fa fa-laptop" aria-hidden="true"></i>
        Войти
      </Link>
        </div>
    </div>
</div>

    </nav>
  );
}

export default Navbar;