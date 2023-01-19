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
    data: { completed: boolean; text: string; }[];
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
        case ActionType.ADD_TODO:
            return {
                ...state,
                loading: {
                    ...state.loading,
                    adding: true
                }
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
        // case ActionType.GET_TODOS_ERROR:
        // case 'add_todo':
        //     return {
        //         loading: true,
        //         error: null,
        //         data: action.payload
        //     }
        // case 'add_todo_success':
        //     return {
        //         loading: false,
        //         error: null,
        //         data: action.payload
        //     }
        // case 'add_todo_error':
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     }
        default:
            return state
    }
}

export default reducer