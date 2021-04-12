import {
  ErrorState,
  ErrorActions,
  SHOW_ERRORS,
  CLEAR_ERRORS,
} from '../../types'

export default function error(
  state: ErrorState = {
    msg: {},
    status: null,
  },
  action: ErrorActions
): ErrorState {
  switch (action.type) {
  case SHOW_ERRORS:
    return {
      ...state,
      msg: action.payload.msg,
      status: action.payload.status,
    }
  case CLEAR_ERRORS:
    return {
      ...state,
      msg: {},
      status: null,
    }
  default:
    return state
  }
}
