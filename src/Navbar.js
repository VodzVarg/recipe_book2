import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav id="navigation">
        <a href="#" class="logo">Recipe book</a>
        <ul class="links">
    <li><a href="#">О книге рецептов</a></li>
    <li class="dropdown"><a href="#" class="trigger-drop">Рецепты<i class="arrow"></i></a>
      <ul class="drop">
        <li><a href="#">Завтрак</a></li>
        <li><a href="#">Обед</a></li>
        <li><a href="#">Ужин</a></li>
        <li><a href="#">Десерты</a></li>
      </ul>
    </li>
    <li class="dropdown"><a href="#" class="trigger-drop">Контакты<i class="arrow"></i></a>
      <ul class="drop">
        <li><a href="#">Email</a></li>
        <li><a href="#">Телефон</a></li>
      </ul>
    </li>
  </ul>
        </nav>
  );
}

export default Navbar;