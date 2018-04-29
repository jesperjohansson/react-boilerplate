import { ACTIONS } from '../constants'

export const toggle = force => ({
  type: ACTIONS.SAMPLE_TOGGLE,
  isToggled: force,
})
