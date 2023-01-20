import { ActionType } from '../action-types'
import { Action } from '../actions'

type TodosState = {
    loading: {
        fetching: boolean;
        adding: boolean;
        updating: boolean;
        deleting: boolean;
    };
    error: string | null;
    data: { completed: boolean; text: string; id: string; }[];
}

const initialState = {
    /* Todo list can have many loading states, ex. user can perform adding & deleting at the same time */
    loading: {
        fetching: false,
        adding: false,
        updating: false,
        deleting: false
    },
    error: null,
    data: []
}

const reducer = (
    state: TodosState = initialState,
    action: Action
): TodosState => {
    switch(action.type) {
        case ActionType.UPDATE_TODO:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    updating: true
                }
            }
        case ActionType.UPDATE_TODO_SUCCESS:
            const updatedTodo = action.payload
            const updatedTodos = state.data.map((todoItem) => {
                return updatedTodo.id === todoItem.id
                    ? { ...updatedTodo }
                    : todoItem
            })

            return {
                ...state,
                loading: {
                    ...state.loading,
                    updating: false
                },
                data: updatedTodos
            }
        case ActionType.UPDATE_TODO_ERROR:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    updating: false
                },
                error: action.payload
            }
        case ActionType.ADD_TODO:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    adding: true
                }
            }
        case ActionType.ADD_TODO_SUCCESS:
            const todo = action.payload
            return {
                ...state,
                loading: {
                    ...state.loading,
                    adding: false
                },
                data: [todo, ...state.data]
            }
        case ActionType.ADD_TODO_ERROR:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    adding: false
                },
                error: action.payload
            }
        case ActionType.GET_TODOS:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    fetching: true
                }
            }
        case ActionType.GET_TODOS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: {
                    ...state.loading,
                    fetching: false
                }
            }
        case ActionType.GET_TODOS_ERROR:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    fetching: false
                },
                error: action.payload
            }
        case ActionType.DELETE_TODO:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    deleting: true
                }
            }
        case ActionType.DELETE_TODO_SUCCESS:
            const deletedTodoId = action.payload
            const todos = state.data.filter(todo => todo.id !== deletedTodoId)
            return {
                ...state,
                loading: {
                    ...state.loading,
                    deleting: true
                },
                data: todos
            }
        case ActionType.DELETE_TODO_ERROR:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    deleting: false
                },
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer