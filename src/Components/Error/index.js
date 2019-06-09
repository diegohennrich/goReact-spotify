import React from 'react'
import CloseButton from '../../assets/images/error.svg'
import { Container, Message, Close } from './style'

const Error = props => (
  <Container>
    <Message>{props.msg}</Message>
    <Close>
      <img src={CloseButton} alt="close" />
    </Close>
  </Container>
)

export default Error
