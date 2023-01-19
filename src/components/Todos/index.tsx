import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useAction'
import { RootState } from '../../state'
import SkeletonLoader from '../SkeletonLoader'
import Todo from '../Todo'

const Todos: React.FC = () => {
    const { getTodos } = useActions()
    const { data: todos, error, loading } = useSelector((state: RootState) => state.todos)

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <>
            {error && <p>{error}</p>}
            {loading.fetching
                ? <SkeletonLoader />
                : (
                    <div style={{ marginTop: '20px' }}>
                        {todos.map((todoItem: any) => <Todo {...todoItem} />)}
                    </div>
                  )
            }
        </>
    )
}

export default Todos