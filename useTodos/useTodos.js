import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = ( initialState = {}) => {

    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' )) || [];
    }
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init )
  
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
      
  
    const handleNewTodo = ( todo ) => {
        for ( let state of todos) {
            if ( state.description === todo.description) {
                alert('Todo already added');
                return;
            }
        }
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
  
        dispatch( action );
    }
  
    const handleDeleteTodo = ( id ) => {
        dispatch( {
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
  
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        ...todos,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,

    }

}
