import React from 'react';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
    alert(`Вы кликнули ${this.state.count + 1} раз`);
  }

  render() {
    return <button onClick={this.handleClick}>Нажми меня</button>;
  }
}

export default MyButton;