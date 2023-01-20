import React, { useState } from 'react'
import { TodoItem, Input } from './styles'
import { FaRegCircle, FaRegCheckCircle, FaRegTrashAlt } from 'react-icons/fa';
import useAutoFocus from '../../hooks/useAutoFocus'
import { useActions } from '../../hooks/useAction'

const ESCAPE_KEY = 27
const ENTER_KEY = 13

const Todo: React.FC = (x: any) => {
    const { setEditId, editting, id, completed, text } = x
    const [editText, setEditText] = useState(text)
    const inputRef = useAutoFocus()
    const { updateTodo, deleteTodo } = useActions()

    const onBlur = (todo: any) => {
        if (editText.length) {
            updateTodo(todo)
            setEditId('')
        }
    }

    const onKeyDown = (e: any, todo: any) => {
        if (editText.length) {
            if (e.which === ESCAPE_KEY) {
                setEditId('')
            } else if (e.which === ENTER_KEY) {
                updateTodo(todo)
                setEditId('')
            }
        }
    }

    const edittedTodo = { id, completed, text: editText }

    return editting
        ? (
            <TodoItem>
                <Input
                    ref={inputRef}
                    onKeyDown={(e) => onKeyDown(e, edittedTodo)}
                    onChange={e => setEditText(e.target.value)}
                    onBlur={() => onBlur(edittedTodo)}
                    value={editText}
                />
            </TodoItem>
        )
        : (
            <TodoItem spaceBetween={true}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {completed
                        ? <FaRegCheckCircle onClick={() => updateTodo({ id, completed: !completed, text })} style={{ marginRight: '30px', fontSize: '20px', display: 'block', color: 'green', cursor: 'pointer' }} />
                        : <FaRegCircle onClick={() => updateTodo({ id, completed: !completed, text })} style={{ marginRight: '30px', display: 'block', cursor: 'pointer' }} />
                    }
                    <p onDoubleClick={() => !completed && setEditId(id)} style={{ textDecoration: completed && 'line-through', color: completed && 'lightgray' }}>{x.text}</p>
                </div>

                <FaRegTrashAlt onClick={() => deleteTodo(id)} style={{ color: '#b47e82' }} />
            </TodoItem>
        )
}

export default Todo