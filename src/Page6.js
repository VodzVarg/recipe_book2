import React from 'react';
import image from './img/L.jpeg'; 

class Page6 extends React.Component {
    handleClick() {
      alert("Лазанья");
    }
  
  render() {
    return (
        <div className="content">
        <h1 onClick={this.handleClick.bind(this)}>Рецепт: Лазанья</h1>
        <img src={image} alt="Лазанья" />
        <h2>Ингредиенты:</h2>
        <ul>
          <li>Листы лазаньи - 12 шт.</li>
          <li>Фарш - 500 г</li>
          <li>Томатный соус - 400 мл</li>
          <li>Лук - 1 шт.</li>
          <li>Чеснок - 2 зубчика</li>
          <li>Сыр моцарелла - 200 г</li>
          <li>Соль, перец - по вкусу</li>
        </ul>
        <h2>Инструкции:</h2>
        <ol>
          <li>Обжарьте фарш на сковороде до готовности. Добавьте измельченный лук и чеснок и обжарьте еще пару минут.</li>
          <li>Добавьте томатный соус, посолите и поперчите по вкусу, затем варите на медленном огне 10-15 минут.</li>
          <li>В глубокой форме для запекания выложите слой лазаньи, затем слой соуса и слой тертого сыра. Повторите слои, пока не закончатся ингредиенты, закончив слоем сыра.</li>
          <li>Запекайте в духовке, предварительно нагретой до 180 градусов, в течение 30-40 минут, или до золотистого цвета.</li>
          <li>Подавайте горячим.</li>
        </ol>
      </div>
    );
  }
}

export default Page6;