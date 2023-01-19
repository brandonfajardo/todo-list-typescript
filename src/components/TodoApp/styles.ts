import styled from 'styled-components'
import { salmonPink, lightGrey } from '../../styles/colours'
import { Flex } from '../../styles/layout'

export const Heading = styled.h1`
    align-self: center;
    color: ${salmonPink};
`

export const Wrapper = styled(Flex)`
    width: 100%;
    height: 100vh;
    background-color: ${lightGrey};
`

export const ContentWrapper = styled(Flex)`
    width: 500px;
    background-color: ${lightGrey};
`