import React from 'react';
import { Heading, Wrapper, ContentWrapper } from './styles'
import Form from '../Form'
import Todos from '../Todos'

const TodoApp: React.FC = () => {
  return (
    <Wrapper center={true}>
      <ContentWrapper column={true}>
        <Heading>Todos</Heading>
        <Form />
        <Todos />
      </ContentWrapper>
    </Wrapper>
  )
}

export default TodoApp;
