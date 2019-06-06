import React from 'react'
import './config/reactotron'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

import GlobalStyle from './styles/global'
import { Wrapper, Container, Content } from './styles/components'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Header from './Components/Header'
import Routes from './Routes'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyle />
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  )
}

export default App
