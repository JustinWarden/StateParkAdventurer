import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Parks from './components/Parks'

ReactDOM.render(
  <Router>
    <Parks />
  </Router>
  , document.getElementById('root'))

