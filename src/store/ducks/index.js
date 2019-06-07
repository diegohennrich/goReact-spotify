import { combineReducers } from 'redux'
import Playlists from './playlists'
import playlistDetails from './playlistDetails'

const reducers = combineReducers({
  Playlists,
  playlistDetails
})

export default reducers
