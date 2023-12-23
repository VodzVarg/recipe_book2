import React from 'react';
import image from './img/S.jpeg';

class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ваше начальное состояние
    };
  }

  componentDidMount() {
    console.log("Компонент Page4 был успешно отрендерен");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Компонент Page4 был обновлен");
  }

  componentWillUnmount() {
    console.log("Компонент Page4 будет размонтирован");
  }

  handleClick() {
    alert("салат нисуаз");
  }

  render() {
    return (
      <div className="content">
        <h1 onClick={this.handleClick.bind(this)}>Рецепт: Салат Нисуаз</h1>
        <img src={image} alt="Салат Нисуаз" />
        <h2>Ингредиенты:</h2>
        <ul>
          <li>Тунец консервированный - 200 г</li>
          <li>Яйца - 2 шт.</li>
          <li>Картофель - 2 шт.</li>
          <li>Помидоры - 2 шт.</li>
          <li>Оливки - 50 г</li>
          <li>Салатные листья - 100 г</li>
          <li>Соль, перец - по вкусу</li>
        </ul>
        <h2>Инструкции:</h2>
        <ol>
          <li>Отварите картофель и яйца до готовности.</li>
          <li>Нарежьте помидоры, картофель и яйца на крупные куски.</li>
          <li>На тарелку выложите салатные листья, сверху распределите картофель, помидоры, яйца и тунец.</li>
          <li>Добавьте оливки, посолите и поперчите по вкусу.</li>
          <li>Подавайте салат с дрессингом на основе оливкового масла и лимонного сока.</li>
        </ol>
      </div>
    );
  }
}

export default Page4;