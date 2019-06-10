import { combineReducers } from 'redux'
import Playlists from './playlists'
import playlistDetails from './playlistDetails'
import Error from './Error'
import Player from './Player'

const reducers = combineReducers({
  Playlists,
  playlistDetails,
  Error,
  Player
})

export default reducers
