import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetails'
import { Creators as ErrorActions } from '../ducks/Error'

// call -> serve para chamar api externa
// put -> chamar actions do redux

export function * getPlaylistDetails (dados) {
  const { id } = dados.payload

  try {
    const { data } = yield call(api.get, `/playlists/${id}?_embed=songs`)

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(data))
  } catch (e) {
    console.log('entrou no erro do detalhes')
    yield put(
      ErrorActions.setErrorRequest(
        'Não foi possível carregar os detalhes desta playlist.'
      )
    )
  }
}
