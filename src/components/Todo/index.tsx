import React from 'react'
import { TodoItem } from './styles'

const Todo: React.FC = (x: any) => {
    console.log('x -->', x)
    return (
        <TodoItem>
            {x.text}
        </TodoItem>
    )
}

export default Todo