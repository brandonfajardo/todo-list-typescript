import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useAction'
import { RootState } from '../../state'
import SkeletonLoader from '../SkeletonLoader'
import Todo, { TodoItem } from '../Todo'
import { ErrorMessage } from './styles'

const Todos: React.FC = () => {
    const { getTodos } = useActions()
    const { data: todos, error, loading } = useSelector((state: RootState) => state.todos)
    const [editId, setEditId] = useState('')

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading.fetching
                ? <SkeletonLoader rows={5} />
                : (
                    <div>
                        {loading.adding && <SkeletonLoader rows={1} />}
                        {todos.map((todoItem: TodoItem) => {
                            return (
                                <Todo
                                    {...todoItem}
                                    key={todoItem.id}
                                    editting={editId === todoItem.id}
                                    setEditId={setEditId}
                                />
                            )
                        })}
                    </div>
                  )
            }
        </>
    )
}

export default Todos