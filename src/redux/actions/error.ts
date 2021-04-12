import { SHOW_ERRORS, CLEAR_ERRORS, ErrorActions } from '../../types'

export function showErrors(msg: any, status: number): ErrorActions {
  return {
    type: SHOW_ERRORS,
    payload: {
      msg,
      status,
    },
  }
}

export function clearErrors(): ErrorActions {
  return {
    type: CLEAR_ERRORS,
  }
}
