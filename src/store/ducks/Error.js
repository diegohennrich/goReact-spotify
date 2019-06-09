import Immutable from 'seamless-immutable'

export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE'
}

const INITIAL_STATE = Immutable({
  msg: '',
  show: false
})

export default function Error (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, show: true, msg: action.payload.msg }
    case Types.HIDE:
      return { ...state, show: false }
    default:
      return state
  }
}

// definindo as actions
export const Creators = {
  setErrorRequest: msg => ({
    type: Types.SET,
    payload: { msg }
  }),
  hideErrorRequest: () => ({
    type: Types.HIDE
  })
}
