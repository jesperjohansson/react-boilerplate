import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'

export const history = createHistory()
const middleware = routerMiddleware(history)

// prettier-ignore
export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }, applyMiddleware(middleware)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
)
