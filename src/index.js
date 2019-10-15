import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Parks from './components/Parks'
// import ApplicationViews from "./ApplicationViews"

ReactDOM.render(
  <Router>
    <Parks />
    {/* <ApplicationViews/> */}
  </Router>
  , document.getElementById('root'))

