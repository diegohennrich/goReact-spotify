import React, { Fragment, Component } from 'react'
import { Container, Search, User } from './style'
import Error from '../Error'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as ErrorActions } from '../../store/ducks/Error'

class Header extends Component {
  render () {
    return (
      <Fragment>
        <Container>
          <Search>
            <input type="text" placeholder="Search" />
          </Search>

          <User>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMA2GKgZwIrWr1DiIWTwbFrFitZQjQN2c3hh9dVh1GyAlR0m6"
              alt="avatar"
            />
            <span>Diego Hennrich</span>
          </User>
        </Container>
        <Error />
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ErrorActions, dispatch)

const mapStateToProps = state => ({
  Error: state.Error
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
