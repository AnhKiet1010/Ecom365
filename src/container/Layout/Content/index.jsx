import React, { Suspense } from 'react'
import { Redirect, withRouter, Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import { getMenuItemInMenuListByProperty } from '@/utils'
import routeMap from '@/config/routeMap'
import menuList from '@/config/menu'
import Loading from '@/components/Loading'
const { Content } = Layout

const getPageTitle = (menuList, pathname) => {
  let title = 'Ecom365'
  let item = getMenuItemInMenuListByProperty(menuList, 'path', pathname)
  if (item) {
    title = `${item.label} - Ecom365`
  }
  return title
}

const ContentLayout = (props) => {
  const { role, location } = props
  const { pathname } = location

  const handleFilter = (route) => {
    return role === 'admin' || !route.roles || route.roles.includes(role)
  }

  return (
    <DocumentTitle title={getPageTitle(menuList, pathname)}>
      <Content>
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={500} classNames="fade" exit={false}>
            <Suspense fallback={<Loading />}>
              <Switch location={location}>
                <Redirect exact from="/" to="/home" />
                {routeMap.map((route) => {
                  return (
                    handleFilter(route) && (
                      <Route exact component={route.component} key={route.path} path={route.path} />
                    )
                  )
                })}
                <Redirect to="/error/404" />
              </Switch>
            </Suspense>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </DocumentTitle>
  )
}

export default connect((state) => state.user)(withRouter(ContentLayout))
