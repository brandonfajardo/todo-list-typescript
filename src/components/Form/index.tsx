import React, { useState } from 'react'
import { Input } from './styles'
import useAutoFocus from '../../hooks/useAutoFocus'
import { useActions } from '../../hooks/useAction'

const Form: React.FC = () => {
    const [text, setText] = useState('')
    const inputRef = useAutoFocus();
    const { addTodo } = useActions()

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (text.length) {
            addTodo(text)
            setText('') 
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Input
                ref={inputRef}
                data-qa="todo-text-input"
                placeholder="What needs to be done?"
                type="text"
                value={text}
                onChange={onTextChange}
            />
        </form>
    )
}

export default Form