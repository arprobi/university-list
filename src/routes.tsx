import { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import Error from './containers/Error'

export default class extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error code={404} />} />
      </Routes>
    )
  }
}

