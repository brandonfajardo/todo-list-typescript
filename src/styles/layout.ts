import styled from 'styled-components'


type FlexProps = {
    column?: boolean;
    center?: boolean;
    spaceBetween?: boolean;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props: any) => props.column ? 'column' : 'row'};
    justify-content: ${(props: any) => {
        if (props.center) {
           return 'center' 
        }
        
        if (props.spaceBetween) {
            return 'space-between'
        }
        
        return ''
    }};
`