import React from 'react';
import MyButton from './MyButton';

class Registration extends React.Component {
  handleClick = () => {
    alert("Вы кликнули на кнопку!");
  }

  handleKeyDown = (event) => {
    alert(`Вы нажали клавишу: ${event.key}`);
  }

  render() {
    return (
      <div className="content">
        <h1>Регистрация</h1>
        <form>
          <label>
            Имя:
            <input type="text" name="name" />
          </label>
          <label>
            Электронная почта:
            <input type="email" name="email" />
          </label>
          <label>
            Пароль:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="Зарегистрироваться" onClick={this.handleClick} />
        </form>
        <button onClick={this.handleClick}>Нажми меня</button>
        <input type="text" placeholder="Нажмите любую клавишу..." onKeyDown={this.handleKeyDown} />
        <MyButton />
      </div>
    );
  }
}

export default Registration;