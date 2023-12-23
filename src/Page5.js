import React from 'react';
import image from './img/B.jpeg';

class Page5 extends React.Component {
    handleClick() {
      alert("Болоньезе");
    }
  
  render() {
    return (
        <div className="content">
        <h1 onClick={this.handleClick.bind(this)}>Рецепт: Паста Болоньезе</h1>
        <img src={image} alt="Паста Болоньезе" />
        <h2>Ингредиенты:</h2>
        <ul>
          <li>Спагетти - 200 г</li>
          <li>Фарш - 200 г</li>
          <li>Томатный соус - 200 мл</li>
          <li>Лук - 1 шт.</li>
          <li>Чеснок - 2 зубчика</li>
          <li>Соль, перец - по вкусу</li>
        </ul>
        <h2>Инструкции:</h2>
        <ol>
          <li>Варите спагетти в подсоленной воде до состояния аль денте.</li>
          <li>Обжарьте фарш на сковороде до готовности.</li>
          <li>Добавьте измельченный лук и чеснок и обжарьте еще пару минут.</li>
          <li>Добавьте томатный соус, посолите и поперчите по вкусу, затем варите на медленном огне 10-15 минут.</li>
          <li>Смешайте спагетти с соусом болоньезе.</li>
          <li>Подавайте горячим.</li>
        </ol>
      </div>
    );
  }
}

export default Page5;