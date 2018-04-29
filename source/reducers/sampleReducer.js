import { ACTIONS } from '../constants'

export default (state = { isToggled: false }, action) => {
  switch (action.type) {
    case ACTIONS.SAMPLE_TOGGLE:
      return {
        ...state,
        isToggled: typeof action.isToggled === 'boolean' ? action.isToggled : !state.isToggled,
      }

    default:
      return state
  }
}
