import React from 'react'
import CloseButton from '../../assets/images/error.svg'
import { Container, Message, Close } from './style'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ErrorActions } from '../../store/ducks/Error'

// pega o state "msg" e "show" do redux do "Error". No segundo parâmetro pega a action hideErrorRequest do Creators do redux
const ErrorBox = ({ Error: { msg, show }, hideErrorRequest }) =>
  show && (
    <Container>
      <Message>{msg}</Message>
      <Close onClick={hideErrorRequest}>
        <img src={CloseButton} alt="close" />
      </Close>
    </Container>
  )

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch)

const mapStateToProps = state => ({
  Error: state.Error
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBox)
