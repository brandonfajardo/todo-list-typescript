import styled from 'styled-components'
import { black } from '../../styles/colours'
import { Flex } from '../../styles/layout'

export const Heading = styled.h1`
    align-self: center;
    color: ${black};
`

export const Wrapper = styled(Flex)`
    width: 100%;
    height: 100%;
`

export const ContentWrapper = styled(Flex)`
    width: 500px;
`