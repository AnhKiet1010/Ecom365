import React from 'react'
import { Menu } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.less'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

function IMenu(props) {
  const { items, openKey, sidebarCollapsed } = props
  const location = useLocation()

  const mappingItemsToCollapsedMenu = () => {
    if (sidebarCollapsed) {
      const newMenu = [...items]

      return newMenu.forEach((item) => {
        const hasChildren = !!item.children
        if (hasChildren) {
          const headerChildren = {
            ...item,
            path: null,
            icon: null,
            children: item.children,
          }

          item.children = headerChildren
        }

        console.log(item)
        return item
      })
    }

    return items
  }

  return (
    <div className="sidebar-menu-container">
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Menu
          mode="inline"
          // items={items}
          items={mappingItemsToCollapsedMenu()}
          theme="light"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={openKey}
        />
      </Scrollbars>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { app } = state
  const { sidebarCollapsed } = app

  return {
    sidebarCollapsed,
  }
}

export default connect(mapStateToProps)(React.memo(IMenu))
