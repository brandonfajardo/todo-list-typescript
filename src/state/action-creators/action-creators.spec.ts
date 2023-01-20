import configureStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../action-creators'
import fetchClient from '../../utils/fetchClient'
import { ActionType } from '../action-types'
import { RootState } from '../index'

jest.mock('../../utils/fetchClient', () => jest.fn())

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>
const mockStore = configureStore<RootState, DispatchExts>([thunk])
const store = mockStore({
  todos: {
    loading: {
      fetching: false,
      adding: false,
      deleting: false,
      updating: false
    },
    data: [],
    error: ''
  }
})

describe('action creators', () => {
  describe('getTodos', () => {
    afterEach(() => {
      store.clearActions()
    })

    it('gets the todos successfully ', async () => {
      (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation((): any => {
        return [{ id: 'saasd-fsdggdf-ad', text: 'Walk the dog', completed: false }]
      })
      await store.dispatch(getTodos())
      expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', { method: 'GET' })
      expect(store.getActions()).toEqual([
        { type: ActionType.GET_TODOS },
        { type: ActionType.GET_TODOS_SUCCESS, payload: [{ id: 'saasd-fsdggdf-ad', text: 'Walk the dog', completed: false }] }
      ])
    })

    it('does not get the todos', async () => {
      (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation(() => {
        throw new Error('Fetch error')
      })
      await store.dispatch(getTodos())
      expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', { method: 'GET' })
      expect(store.getActions()).toEqual([
        { type: ActionType.GET_TODOS },
        {
          type: ActionType.GET_TODOS_ERROR,
          payload: 'Fetch error'
        }
      ])
    })
  })
  
  describe('addTodo', () => {
    const todoToAdd = { id: 'fdsdf-gdfgdg-da', text: 'New todo', completed: false }
    const opts = { 
      method: 'POST',
      body: JSON.stringify({ text: 'New todo' }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    afterEach(() => {
      store.clearActions()
    })

    it('adds the todos successfully', async () => {
      (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation((): any => {
        return todoToAdd
      })
      await store.dispatch(addTodo('New todo'))
      expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', opts)
      expect(store.getActions()).toEqual([
        { type: ActionType.ADD_TODO },
        { type: ActionType.ADD_TODO_SUCCESS, payload: todoToAdd }
      ])
    })

    it('does not add the todo successfully', async () => {
      (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation(() => {
        throw new Error('Update error')
      })
      await store.dispatch(addTodo('New todo'))
      expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', opts)
      expect(store.getActions()).toEqual([
        { type: ActionType.ADD_TODO },
        {
          type: ActionType.ADD_TODO_ERROR,
          payload: 'Update error'
        }
      ])
    })
  })

  describe('updateTodo', () => {
    const updatedTodo = { id: 'adfsdf-dsfs-rs', text: 'Editted text', completed: false }
    const opts = { 
      method: 'PUT',
      body: JSON.stringify({ todo: updatedTodo }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    afterEach(() => {
      store.clearActions()
    })

    it('updates the todo successfully', async () => {
        (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation((): any => {
          return { id: 'adfsdf-dsfs-rs', text: 'Editted text', completed: false }
        })
        await store.dispatch(updateTodo(updatedTodo))
        expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', opts)
        expect(store.getActions()).toEqual([
          { type: ActionType.UPDATE_TODO },
          { type: ActionType.UPDATE_TODO_SUCCESS, payload: { id: 'adfsdf-dsfs-rs', text: 'Editted text', completed: false } }
        ])
    })

    it('does not add the todo successfully', async () => {
      (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation(() => {
        throw new Error('Add error')
      })
      await store.dispatch(updateTodo(updatedTodo))
      expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', opts)
      expect(store.getActions()).toEqual([
        { type: ActionType.UPDATE_TODO },
        {
          type: ActionType.UPDATE_TODO_ERROR,
          payload: 'Add error'
        }
      ])
    })
  })

  describe('deleteTodo', () => {
    const id = 'asdasd-asff-gfg'
    const opts = { 
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    afterEach(() => {
      store.clearActions()
    })

    it('deletes the todo successfully', async () => {
        (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation((): any => {
          return { id: 'adfsdf-dsfs-rs', text: 'Editted text', completed: false }
        })
        await store.dispatch(deleteTodo(id))
        expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', opts)
        expect(store.getActions()).toEqual([
          { type: ActionType.DELETE_TODO },
          { type: ActionType.DELETE_TODO_SUCCESS, payload: { id: 'adfsdf-dsfs-rs', text: 'Editted text', completed: false } }
        ])
    })

    it('does not delete the todo successfully', async () => {
      (fetchClient as jest.MockedFunction<typeof fetch>).mockImplementation(() => {
        throw new Error('Delete error')
      })
      await store.dispatch(deleteTodo(id))
      expect(fetchClient).toBeCalledWith('http://localhost:8080/todos', opts)
      expect(store.getActions()).toEqual([
        { type: ActionType.DELETE_TODO },
        {
          type: ActionType.DELETE_TODO_ERROR,
          payload: 'Delete error'
        }
      ])
    })
  })
})