import styled from 'styled-components'
import { Flex } from '../../styles/layout'
import { medium } from '../../styles/fonts'
import { white, salmonPink, grey, green } from '../../styles/colours'
import { FaRegTrashAlt, FaRegCircle, FaRegCheckCircle} from 'react-icons/fa';

export const TodoWrapper = styled(Flex)`
    width: 100%;
    padding: 20px 30px;
    font-size: ${medium};
    box-sizing: border-box;
    height: 70px;
    background: ${white};
    margin-bottom: 10px;
    box-shadow: 1px 2px 15px -1px rgb(0 0 0 / 10%);
`

export const Input = styled.input`
    width: 100%;
    font-size: ${medium};
`

export const TrashIcon = styled(FaRegTrashAlt)`
    color: ${salmonPink};
`

type TodoTextProps = {
    completed: boolean;
}

export const TodoText = styled.p<TodoTextProps>`
    text-decoration: ${props => props.completed && 'line-through'};
    color: ${props => props.completed && grey};
`

export const CheckCircleIcon = styled(FaRegCheckCircle)`
    margin-right: 30px;
    font-size: ${medium};
    color: ${green};
    cursor: pointer;
`

export const CircleIcon = styled(FaRegCircle)`
    margin-right: 30px;
    cursor: pointer;
`
