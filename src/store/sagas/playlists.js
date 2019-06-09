import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as PlaylistsActions } from '../ducks/playlists'
import { Creators as ErrorActions } from '../ducks/Error'
// call -> serve para chamar api externa
// put -> chamar actions do redux

export function * getPlaylists () {
  try {
    const { data } = yield call(api.get, '/playlists')

    yield put(PlaylistsActions.getPlaylistsSuccess(data))
  } catch (e) {
    yield put(
      ErrorActions.setErrorRequest('Não foi possível carregar as playlists.')
    )
  }
}
