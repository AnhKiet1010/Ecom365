import './index.less'

import Icon from '@ant-design/icons'
import React from 'react'
import { connect } from 'react-redux'
import { toggleSiderBar } from '@/store/actions'

import { CircleArrowClose, CircleArrowOpen } from '@/icons'

const Hamburger = (props) => {
  const { sidebarCollapsed, toggleSiderBar } = props
  return (
    <div className="hamburger-container">
      <Icon
        component={sidebarCollapsed ? CircleArrowOpen : CircleArrowClose}
        onClick={() => toggleSiderBar()}
      />
    </div>
  )
}

export default connect((state) => state.app, { toggleSiderBar })(Hamburger)
