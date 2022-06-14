import React from 'react'
import { Menu } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.less'

export default function IMenu({ items }) {
  return (
    <div className="sidebar-menu-container">
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <Menu mode="inline" items={items} />
      </Scrollbars>
    </div>
  )
}
