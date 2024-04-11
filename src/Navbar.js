import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector
import './Navbar.css';
function Navbar(props) {
  const { isAdmin, onLogout } = props;
  const loggedInUser = useSelector(state => state.auth?.user); // Assuming user info is in auth.user

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <nav className="top">
      <div className="header-container">
        <div className="header-content">
        <div class="header-left">
            <span class="header-heart">♡</span>
            <span class="header-title">1000 МЕНЮ</span>
        </div>
        <div class="header-search">
            <input type="text" placeholder="Поиск" class="header-search-input" />
            <span class="header-search-icon">🔍</span>
        </div>
          <div className="header-menu">
          <Link to="/recipeapp" className="span">
          <i className="fa fa-laptop" aria-hidden="true"></i>
        Добавить рецепт
      </Link>
      <span>Каналы</span>
            <span>Работа</span>
            <span>Конкурсы</span>
        {loggedInUser ? (
              <>
                <span>Welcome, {loggedInUser.username}</span>
                {isAdmin && (
                  <>
                    <span> (Администратор)</span>
                    <button className="header-button-exit" onClick={handleLogout}>
                      Выйти
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                {/* ... (elements for non-logged-in users) */}
                <Link to="/login" className="button">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                  Войти
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;