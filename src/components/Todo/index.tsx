import React, { useState } from 'react'
import { TodoWrapper, Input, TodoText, TrashIcon, CheckCircleIcon, CircleIcon } from './styles'
import { Flex } from '../../styles/layout'
import useAutoFocus from '../../hooks/useAutoFocus'
import { useActions } from '../../hooks/useAction'

export type TodoItem = {
    id: string;
    completed: boolean;
    text: string;
}

type TodoProps = {
    setEditId: Function;
    editting: boolean;
    id: string;
    completed: boolean;
    text: string;
}

const Todo: React.FC<TodoProps> = ({ setEditId, editting, id, completed, text }) => {
    const [editText, setEditText] = useState(text)
    const inputRef = useAutoFocus()
    const { updateTodo, deleteTodo } = useActions()

    const onBlur = (todo: TodoItem) => {
        if (editText.length) {
            updateTodo(todo)
            setEditId('')
        }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (editText.length && e.which === 27) { // ESC button
            setEditId('')
            setEditText(text)
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>, edittedTodo: TodoItem) => {
        e.preventDefault()

        updateTodo(edittedTodo)
        setEditId('')
    }

    const edittedTodo = { id, completed, text: editText }
    const updatedTodo = { id, completed: !completed, text }

    return editting
        ? (
            <TodoWrapper>
                <form onSubmit={(e) => onSubmit(e, edittedTodo)}>
                    <Input
                        ref={inputRef}
                        onKeyDown={onKeyDown}
                        onChange={e => setEditText(e.target.value)}
                        onBlur={() => onBlur(edittedTodo)}
                        value={editText}
                    />
                </form>
            </TodoWrapper>
        )
        : (
            <TodoWrapper spaceBetween={true}>
                <Flex row={true}>
                    {completed
                        ? <CheckCircleIcon onClick={() => updateTodo(updatedTodo)} />
                        : <CircleIcon onClick={() => updateTodo(updatedTodo)} />
                    }
                    <TodoText onDoubleClick={() => !completed && setEditId(id)} completed={completed}>{text}</TodoText>
                </Flex>
                <TrashIcon onClick={() => deleteTodo(id)} />
            </TodoWrapper>
        )
}

export default Todo