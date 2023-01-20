import styled, { keyframes } from 'styled-components'

const shine = keyframes`
    0% {
      background-position: -100px;
    }
    40%,
    100% {
      background-position: 270px;
    }
  }
`

export const Skeleton = styled.div`
    background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
    background-size: 350px;
    width: 100%;
    height: 70px;
    border-radius: 3px;
    margin-bottom: 10px;
    animation: ${shine} 1s infinite;
`