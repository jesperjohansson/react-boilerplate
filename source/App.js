import React from 'react'
import { hot } from 'react-hot-loader'
import Nav from './components/common/Nav'

const App = () => (
  <div>
    <Nav />
    Hello World!
  </div>
)

export default hot(module)(App)
