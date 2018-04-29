import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './store'
import App from './App'
import Sample from './components/Sample'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/sample" component={Sample} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)
