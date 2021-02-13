import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import AppLayout from './components/app_layout'
import Routes from './routes'

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  )
}

export default App