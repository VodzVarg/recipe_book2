import React from 'react';

// HOC, который добавляет функциональность "избранное"
function withFavorite(Component) {
  return class extends React.Component {
    state = { favorite: false };

    toggleFavorite = () => {
      this.setState(prevState => ({ favorite: !prevState.favorite }));
    };

    render() {
      const { favorite } = this.state;

      return (
        <Component
          {...this.props}
          favorite={favorite}
          toggleFavorite={this.toggleFavorite}
        />
      );
    }
  };
}

class Recipe extends React.Component {
  render() {
    const { recipe, favorite, toggleFavorite, handleDelete } = this.props;

    return (
      <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
        <button onClick={toggleFavorite}>{favorite ? 'Удалить из избранного' : 'Добавить в избранное'}</button>
        <button onClick={handleDelete}>Удалить рецепт</button>
      </div>
    );
  }
}

const RecipeWithFavorite = withFavorite(Recipe);

class RecipeApp extends React.Component {
  constructor(props) {
    super(props);
    const savedRecipes = localStorage.getItem('recipes');
    this.state = {
      recipes: savedRecipes ? JSON.parse(savedRecipes) : [],
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
    this.setState(state => {
      const recipes = [...state.recipes, {
        title: state.title,
        ingredients: state.ingredients,
        instructions: state.instructions
      }];
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return {
        recipes,
        title: '',
        ingredients: '',
        instructions: ''
      };
    });
  }

  handleDelete = (index) => {
    this.setState(state => {
      const recipes = [...state.recipes];
      recipes.splice(index, 1);
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes };
    });
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
      </div>
    );
  }
}

export default RecipeApp;