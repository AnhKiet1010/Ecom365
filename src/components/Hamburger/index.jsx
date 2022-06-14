import './index.less'

import Icon from '@ant-design/icons'
import React from 'react'

import { CircleArrowClose, CircleArrowOpen } from '@/icons'

const Hamburger = ({ collapsed, toggleSidebar }) => {
  return (
    <div className="hamburger-container">
      <Icon
        component={collapsed ? CircleArrowOpen : CircleArrowClose}
        onClick={() => toggleSidebar()}
      />
    </div>
  )
}

export default Hamburger
