import React, { useMemo, useState } from 'react'
import './index.less'

import { Layout } from 'antd'
import { connect } from 'react-redux'

import Logo from './Logo'
import IMenu from './Menu'
import Search from './Search'
import { Link, useLocation } from 'react-router-dom'
import menu from '@/config/menu'
import Icon from '@ant-design/icons'

const { Sider } = Layout

const SiderLayout = (props) => {
  const { sidebarCollapsed } = props
  const role = 'admin'
  const location = useLocation()
  const [openKey, setOpenKey] = useState([])

  const filterMenuItem = (item) => {
    const { roles } = item
    if (role === 'admin' || !roles || roles.includes(role)) {
      return true
    } else if (item.children) {
      return !!item.children.find(() => roles.includes(role))
    }
    return false
  }

  function getItem(menuList) {
    const { pathname } = location
    return menuList.reduce((pre, item) => {
      if (filterMenuItem(item)) {
        const menuItem = {
          label:
            item.path && !item.children ? <Link to={item.path}>{item.label}</Link> : item.label,
          key: item.path,
          icon: item.icon ? <Icon component={item.icon} /> : null,
        }
        if (item.children) {
          const cItem = item.children.find((cItem) => pathname.indexOf(cItem.path) === 0)
          if (cItem) {
            setOpenKey([...openKey, item.path])
          }
          menuItem.children = getItem(item.children)
        }
        pre.push(menuItem)
      }
      return pre
    }, [])
  }

  const items = useMemo(() => getItem(menu), [])

  return (
    <>
      <Sider trigger={null} collapsible collapsed={sidebarCollapsed} width="250px">
        <Logo collapsed={sidebarCollapsed} />
        <Search />
        <IMenu items={items} openKey={openKey} />
      </Sider>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.settings,
  }
}

export default connect(mapStateToProps)(SiderLayout)
