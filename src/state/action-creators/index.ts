import { ActionType } from '../action-types'
import { Action } from '../actions'
import { Dispatch } from 'redux'
import constants from '../../constants'
import fetchClient from '../../utils/fetchClient'

export const getTodos = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.GET_TODOS })
        console.log('DISPATCH')

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
            const res = await fetch(`${constants.SERVER_URL}/todos`, {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    text
                })
            })
            const todos = await res.json()
            dispatch({ type: ActionType.ADD_TODO_SUCCESS, payload: todos })
        } catch (e: any) {
            dispatch({ type: ActionType.ADD_TODO_ERROR, payload: e.message })
        }
    }
}

export const updateTodo = (todo: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.UPDATE_TODO })
        try {
            const res = await fetch(`${constants.SERVER_URL}/todos`, {
                headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'PUT',
                  body: JSON.stringify({ todo })
            })

            const updatedTodo = await res.json()
            dispatch({ type: ActionType.UPDATE_TODO_SUCCESS, payload: updatedTodo })

        } catch (e: any) {
            dispatch({ type: ActionType.UPDATE_TODO_ERROR, payload: e.message })
        }
    }
}

export const deleteTodo = (id: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.DELETE_TODO })
        try {
            const res = await fetch(`${constants.SERVER_URL}/todos`, {
                headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'DELETE',
                  body: JSON.stringify({ id })
            })

            const deletedTodoId = await res.json()

            dispatch({ type: ActionType.DELETE_TODO_SUCCESS, payload: deletedTodoId })

        } catch (e: any) {
            dispatch({ type: ActionType.DELETE_TODO_ERROR, payload: e.message })
        }
    }
}