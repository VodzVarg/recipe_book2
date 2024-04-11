import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    // Retrieve recipes from localStorage when the component mounts
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      this.setState({ recipes: JSON.parse(savedRecipes) });
    }
  }

  render() {
    return (
      <div className='content'>
        <h1>All Recipes</h1>
        <div className='blockbox'>
          {this.state.recipes.map((recipe, index) => (
            <div key={index} className='block'>
              <Link to={`/recipe/${recipe.id}`}>
                <h2>{recipe.title}</h2>
              </Link>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
