import React from 'react';
import image from './img/R.jpeg';

class Page3 extends React.Component {
  
  
  render() {
    return (
        <div className="content">
        <h1>Рецепт: Паста Карбонара</h1>
        <img src={image} alt="Паста Карбонара" />
        <h2>Ингредиенты:</h2>
        <ul>
          <li>Спагетти - 200 г</li>
          <li>Бекон - 100 г</li>
          <li>Сливки - 100 мл</li>
          <li>Пармезан - 50 г</li>
          <li>Яйца - 2 шт.</li>
          <li>Чеснок - 2 зубчика</li>
          <li>Соль, перец - по вкусу</li>
        </ul>
        <h2>Инструкции:</h2>
        <ol>
          <li>Варите спагетти в подсоленной воде до состояния аль денте.</li>
          <li>Обжарьте бекон на сковороде до хрустящего состояния.</li>
          <li>Добавьте измельченный чеснок и обжарьте еще пару минут.</li>
          <li>В отдельной миске взбейте яйца, добавьте сливки и тертый пармезан. Посолите и поперчите по вкусу.</li>
          <li>Смешайте спагетти с беконом и чесноком, затем добавьте смесь яиц и сливок.</li>
          <li>Быстро перемешайте, чтобы спагетти были равномерно покрыты соусом.</li>
          <li>Подавайте горячим, посыпав сверху дополнительным пармезаном.</li>
        </ol>
      </div>
    );
  }
}

export default Page3;