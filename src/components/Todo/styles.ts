import styled from 'styled-components'
import { Flex } from '../../styles/layout'

export const TodoItem = styled(Flex)`
    width: 100%;
    padding: 20px 30px;
    font-size: 20px;
    box-sizing: border-box;
    height: 70px;
    background: white;
    margin-bottom: 10px;
    box-shadow: 1px 2px 15px -1px rgb(0 0 0 / 10%);
`

export const Input = styled.input`
    width: 100%;
    font-size: 20px;
`