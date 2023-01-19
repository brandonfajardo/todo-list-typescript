import styled from 'styled-components'


type FlexProps = {
    column?: Boolean;
    center?: Boolean;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props: any) => props.column ? 'column' : 'row'};
    justify-content: ${(props: any) => props.center ? 'center' : ''};
`