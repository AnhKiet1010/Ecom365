import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserInfo } from '@/store/actions'
import Layout from '@/container/layout'
// import Login from '@/features/login'
const Router = (props) => {
  const { token, role, getUserInfo } = props
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        <Route
          path="/"
          render={() => {
            if (!token) {
              return <Redirect to="/login" />
            } else {
              // if (role) {
              return <Layout />
              // } else {
              //   getUserInfo(token).then(() => <Layout />)
              // }
            }
          }}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default connect((state) => state.user, { getUserInfo })(Router)
