import { ActionType } from '../action-types'

type Todo = {
    completed: boolean;
    text: string;
    id: string;
}

type GetTodosAction = {
    type: ActionType.GET_TODOS
}

type GetTodosSuccessAction = {
    type: ActionType.GET_TODOS_SUCCESS;
    payload: Todo[];
}

type GetTodosErrorAction = {
    type: ActionType.GET_TODOS_ERROR;
    payload: string;
}

type UpdateTodoAction = {
    type: ActionType.UPDATE_TODO
}

type UpdateTodoActionSuccess = {
    type: ActionType.UPDATE_TODO_SUCCESS,
    payload: Todo
}

type UpdateTodoActionError = {
    type: ActionType.UPDATE_TODO_ERROR,
    payload: string;
}

type AddTodoAction = {
    type: ActionType.ADD_TODO
}

type AddTodoSuccessAction = {
    type: ActionType.ADD_TODO_SUCCESS,
    payload: Todo
}

type AddTodoErrorAction = {
    type: ActionType.ADD_TODO_ERROR,
    payload: string;
}

type DeleteTodoAction = {
    type: ActionType.DELETE_TODO
}

type DeleteTodoSuccessAction = {
    type: ActionType.DELETE_TODO_SUCCESS,
    payload: string;
}

type DeleteTodoErrorAction = {
    type: ActionType.DELETE_TODO_ERROR;
    payload: string;
}

export type Action =
    GetTodosAction | GetTodosSuccessAction | GetTodosErrorAction 
    | AddTodoAction | AddTodoSuccessAction | AddTodoErrorAction
    | UpdateTodoAction | UpdateTodoActionSuccess | UpdateTodoActionError
    | DeleteTodoAction | DeleteTodoSuccessAction | DeleteTodoErrorAction