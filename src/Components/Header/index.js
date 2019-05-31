import React from 'react'
import { Container, Search, User } from './style'
const Header = () => (
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
)

export default Header
