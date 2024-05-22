export interface Recipe {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string[];
    image: string;
  }
  
  export interface RecipeState {
    recipes: Recipe[];
    loading: boolean;
    error: string | null;
  }
  