import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (process.env.NODE_ENV === 'development') {
  // criando uma nova instância do Tron
  const tron = Reactotron.configure()
    // Definindo redux e saga como middleWare para o tron
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()

  // limpar o tron toda vez que a aplicacao é reiniciada
  tron.clear()

  // colocar a instancia do tron disponivel de forma global pra toda a aplicacao atraves do console.tron
  console.tron = tron
}
