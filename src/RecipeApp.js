import React from 'react';

class RecipeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      title: '',
      ingredients: '',
      instructions: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(state => ({
      recipes: [...state.recipes, {
        title: state.title,
        ingredients: state.ingredients,
        instructions: state.instructions
      }],
      title: '',
      ingredients: '',
      instructions: ''
    }));
  }

  render() {
    return (
      <div className="content">
        <h1>Добавить рецепт</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Название:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Ингредиенты:
            <textarea name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
          </label>
          <label>
            Инструкции:
            <textarea name="instructions" value={this.state.instructions} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Добавить рецепт" />
        </form>
        <div>
          {this.state.recipes.map((recipe, index) => (
            <div key={index}>
              <h2>{recipe.title}</h2>
              <p>{recipe.ingredients}</p>
              <p>{recipe.instructions}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeApp;