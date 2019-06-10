import Immutable from 'seamless-immutable'
import Sound from 'react-sound'

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'playlist/NEXT',
  PREV: 'playlist/PREV',
  PLAYING: 'playlist/PLAYING',
  HANDLE_POSITION: 'playlist/HANDLE_POSITION',
  SET_POSITION: 'playlist/SET_POSITION'
}

const INITIAL_STATE = Immutable({
  currentSong: null,
  list: [],
  status: Sound.status.PAUSED,
  position: null,
  duration: null,
  positionShown: null
})

export default function Player (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.currentSong,
        list: action.payload.list,
        status: Sound.status.PLAYING,
        positionShown: null,
        position: null
      }
    case Types.PLAY:
      return {
        ...state,
        status: Sound.status.PLAYING
      }
    case Types.PAUSE:
      return {
        ...state,
        status: Sound.status.PAUSED
      }
    case Types.PREV: {
      const current = state.list.findIndex(i => i.id === state.currentSong.id)

      const prev = state.list[current - 1]

      if (prev) {
        return {
          ...state,
          currentSong: prev,
          status: Sound.status.PLAYING,
          position: 0,
          positionShown: 0
        }
      }
      return state
    }

    case Types.NEXT: {
      const current = state.list.findIndex(i => i.id === state.currentSong.id)

      const next = state.list[current + 1]

      if (next) {
        return {
          ...state,
          currentSong: next,
          status: Sound.status.PLAYING,
          position: 0,
          positionShown: 0
        }
      }
      return state
    }

    case Types.PLAYING:
      // ...action.payload  coloca tudo o que tem no action para o state do redux
      return { ...state, ...action.payload }

    case Types.HANDLE_POSITION:
      return {
        ...state,
        positionShown: state.duration * action.payload.percent
      }

    case Types.SET_POSITION:
      return {
        ...state,
        position: state.duration * action.payload.percent
      }
    default:
      return state
  }
}

// definindo as actions
export const Creators = {
  loadRequest: (currentSong, list) => ({
    type: Types.LOAD,
    payload: { currentSong, list }
  }),
  play: () => ({
    type: Types.PLAY
  }),
  pause: () => ({
    type: Types.PAUSE
  }),
  next: () => ({
    type: Types.NEXT
  }),
  prev: () => ({
    type: Types.PREV
  }),
  playing: ({ position, duration }) => ({
    type: Types.PLAYING,
    payload: { position, duration }
  }),
  handlePosition: percent => ({
    type: Types.HANDLE_POSITION,
    payload: { percent }
  }),
  setPosition: percent => ({
    type: Types.SET_POSITION,
    payload: { percent }
  })
}
