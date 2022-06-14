import React from 'react'
import Home from '@/features/Home'
import { Route, Switch } from 'react-router-dom'
import './App.less'

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <PrivateRoute exact={true} path="/" component={Home} />
        <PublicRoute exact={true} path="/login" component={Login} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
