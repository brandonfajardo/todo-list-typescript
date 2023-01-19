import { ActionType } from '../action-types'

type GetTodosAction = {
    type: ActionType.GET_TODOS
}

type GetTodosSuccessAction = {
    type: ActionType.GET_TODOS_SUCCESS;
    payload: { completed: boolean; text: string; }[];
}

type GetTodosErrorAction = {
    type: ActionType.GET_TODOS_ERROR;
    payload: string;
}

type AddTodoAction = {
    type: ActionType.ADD_TODO
}

export type Action = GetTodosAction | GetTodosSuccessAction | GetTodosErrorAction | AddTodoAction