import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { isLogin } from '@/hooks'

export const PublicRoute = (props) => {
  const { component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={(routeProps) => (isLogin() ? <Redirect to="/" /> : <Component {...routeProps} />)}
    />
  )
}

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLogin() ? <Component {...routeProps} /> : <Redirect to="/login" />
      }
    />
  )
}
