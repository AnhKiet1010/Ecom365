import React from 'react'
import './index.less'

import { Layout } from 'antd'

import Logo from './Logo'
import IMenu from './Menu'
import { Link } from 'react-router-dom'
import routes from '@/routes'
import Icon from '@ant-design/icons'

const { Sider } = Layout

const SiderComponent = ({ collapsed }) => {
  const role = 'admin'

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
    return menuList.reduce((pre, item) => {
      if (!item.roles || filterMenuItem(item)) {
        const menuItem = {
          label: item.path ? <Link to={item.path}>{item.label}</Link> : item.label,
          key: item.path,
          icon: item.icon ? <Icon component={item.icon} /> : null,
        }
        if (item.children) {
          menuItem.children = getItem(item.children)
        }
        pre.push(menuItem)
      }

      return pre
    }, [])
  }

  const items = getItem(routes)
  console.log(items)

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} width="250px">
        <Logo collapsed={collapsed} />
        <IMenu items={items} />
      </Sider>
    </>
  )
}

export default SiderComponent
