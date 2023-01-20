import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Todos from './index'
import { store } from '../../state/store'

const mockStore = configureStore([thunk])

const initialStateMock = {
    todos: {
        loading: {
            fetching: false,
            adding: false,
            updating: false,
            deleting: false
        },
        error: null,
        data: [
            { completed: false, id: 'asdsa-dadasd-sadsa', text: 'Go buy some milk' },
            { completed: false, id: 'asdsa-dadasd-sadaa', text: 'Walk the dog' }
        ]
    }
}

const mockedStore = mockStore(initialStateMock)

test('renders the skeleton loaders on page load', async () => {
    render(
        <Provider store={store}>
            <Todos />
        </Provider>
    )
    const items = await screen.findAllByTestId('skeleton-row')
    expect(items).toHaveLength(5)
})

test('should list todos', async () => {
    const { getByText } = render(
        <Provider store={mockedStore}>
            <Todos />
        </Provider>
    )
    expect(getByText(/Walk the dog/i)).toBeInTheDocument()
    expect(getByText(/Go buy some milk/i)).toBeInTheDocument()
})
