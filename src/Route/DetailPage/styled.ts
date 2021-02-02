import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const TextBox = styled.div`
    font-size: 24px;
    margin-bottom: 10px;
    cursor: pointer;
    @media (max-width: 560px) {
      font-size: 4.29vw; 
    }
    @media (max-width: 420px) {
      font-size: 18px; 
    }
`

export const ContainerCustom = styled(Container)`
  padding: 0 50px !important;
`