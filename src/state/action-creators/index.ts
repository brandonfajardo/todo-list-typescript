import { ActionType } from '../action-types'
import { Action } from '../actions'
import { Dispatch } from 'redux'
import constants from '../../constants'

export const getTodos = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({ type: ActionType.GET_TODOS })

        try {
            const res = await fetch(`${constants.SERVER_URL}/todos`, {
                method: 'GET'
            })
            const todos = await res.json()

            if (todos.length) {
                dispatch({ type: ActionType.GET_TODOS_SUCCESS, payload: todos })
            }
        } catch (e: any) {
            dispatch({ type: ActionType.GET_TODOS_ERROR, payload: e.message })
        }
    }
}