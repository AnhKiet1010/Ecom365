import React from 'react'
import { Menu } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.less'
import { useLocation } from 'react-router-dom'

function IMenu(props) {
  const { items, openKey } = props
  const location = useLocation()
  return (
    <div className="sidebar-menu-container">
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Menu
          mode="inline"
          items={items}
          theme="light"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={openKey}
        />
      </Scrollbars>
    </div>
  )
}

export default React.memo(IMenu)
