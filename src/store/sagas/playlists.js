import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as PlaylistsActions } from '../ducks/playlists'

// call -> serve para chamar api externa
// put -> chamar actions do redux

export function * getPlaylists () {
  try {
    const { data } = yield call(api.get, '/playlists')
    console.log(data)

    yield put(PlaylistsActions.getPlaylistsSuccess(data))
  } catch (e) {
    console.log(e)
  }
}
