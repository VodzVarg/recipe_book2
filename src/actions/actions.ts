// Action Type Enum
enum ActionType {
    ADD_TODO = "ADD_TODO",
    TOGGLE_TODO = "TOGGLE_TODO",
    DELETE_TODO = "DELETE_TODO",
  }
  
  // Action Interfaces
  interface AddTodoAction {
    type: ActionType.ADD_TODO;
    payload: {
      id: number;
      text: string;
    };
  }
  
  interface ToggleTodoAction {
    type: ActionType.TOGGLE_TODO;
    payload: number;
  }
  
  interface DeleteTodoAction {
    type: ActionType.DELETE_TODO;
    payload: number;
  }
  
  // Type for all possible actions
  type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
  
  // Action Creators
  export const addTodo = (id: number, text: string): AddTodoAction => ({
    type: ActionType.ADD_TODO,
    payload: { id, text },
  });
  
  export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: ActionType.TOGGLE_TODO,
    payload: id,
  });
  
  export const deleteTodo = (id: number): DeleteTodoAction => ({
    type: ActionType.DELETE_TODO,
    payload: id,
  });