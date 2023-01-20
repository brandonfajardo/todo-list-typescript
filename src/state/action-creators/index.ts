import { ActionType } from '../action-types'
import { Action } from '../actions'
import { Dispatch } from 'redux'
import constants from '../../constants'
import fetchClient from '../../utils/fetchClient'
import { TodoItem } from '../../components/Todo'

export const getTodos = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.GET_TODOS })

        try {
            const result = await fetchClient(`${constants.SERVER_URL}/todos`, { method: 'GET' })

            dispatch({ type: ActionType.GET_TODOS_SUCCESS, payload: result })
        } catch (e: any) {
            dispatch({ type: ActionType.GET_TODOS_ERROR, payload: e.message })
        }
    }
}

export const addTodo = (text: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.ADD_TODO })

        try {
            const result = await fetchClient(`${constants.SERVER_URL}/todos`, {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    text
                })
            })
 
            dispatch({ type: ActionType.ADD_TODO_SUCCESS, payload: result })
        } catch (e: any) {
            dispatch({ type: ActionType.ADD_TODO_ERROR, payload: e.message })
        }
    }
}

export const updateTodo = (todo: TodoItem) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.UPDATE_TODO })
        try {
            const result = await fetchClient(`${constants.SERVER_URL}/todos`, {
                headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'PUT',
                  body: JSON.stringify({ todo })
            })

            dispatch({ type: ActionType.UPDATE_TODO_SUCCESS, payload: result })

        } catch (e: any) {
            dispatch({ type: ActionType.UPDATE_TODO_ERROR, payload: e.message })
        }
    }
}

export const deleteTodo = (id: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.DELETE_TODO })
        try {
            const result = await fetchClient(`${constants.SERVER_URL}/todos`, {
                headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'DELETE',
                  body: JSON.stringify({ id })
            })

            dispatch({ type: ActionType.DELETE_TODO_SUCCESS, payload: result })

        } catch (e: any) {
            dispatch({ type: ActionType.DELETE_TODO_ERROR, payload: e.message })
        }
    }
}