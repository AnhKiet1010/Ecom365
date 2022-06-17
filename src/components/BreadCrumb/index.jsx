import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import menu from '@/config/menu'
import './index.less'

const getPath = (menuList, pathname) => {
  let temppath = []
  try {
    // eslint-disable-next-line no-inner-declarations
    function getNodePath(node) {
      temppath.push(node)
      if (node.path === pathname) {
        throw new Error('GOT IT!')
      }
      if (node.children && node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i])
        }
        temppath.pop()
      } else {
        temppath.pop()
      }
    }
    for (let i = 0; i < menuList.length; i++) {
      getNodePath(menuList[i])
    }
  } catch (e) {
    return temppath
  }
}

const BreadCrumb = () => {
  const location = useLocation()
  const { pathname } = location
  let path = getPath(menu, pathname)
  const first = path && path[0]
  if (first && first.label.trim() !== 'Trang chủ') {
    path = [{ label: 'Trang chủ', path: '/home' }].concat(path)
  }

  return (
    <div className="Breadcrumb-container">
      <Breadcrumb>
        {path &&
          path.map((item) =>
            item.label === 'Trang chủ' ? (
              <Breadcrumb.Item key={item.path}>
                <Link to="/">{item.label}</Link>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={item.path}>{item.label}</Breadcrumb.Item>
            ),
          )}
      </Breadcrumb>
    </div>
  )
}

export default withRouter(BreadCrumb)
