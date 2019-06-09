import { combineReducers } from 'redux'
import Playlists from './playlists'
import playlistDetails from './playlistDetails'
import Error from './Error'

const reducers = combineReducers({
  Playlists,
  playlistDetails,
  Error
})

export default reducers
