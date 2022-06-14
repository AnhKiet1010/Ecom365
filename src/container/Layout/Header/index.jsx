import './index.less'

import { Layout } from 'antd'
import React from 'react'

import Hamburger from '../../../components/Hamburger'

const { Header: HeaderAntd } = Layout

const Header = ({ toggleSidebar, collapsed }) => {
  return (
    <HeaderAntd className="site-layout-background">
      <Hamburger toggleSidebar={toggleSidebar} collapsed={collapsed} />
    </HeaderAntd>
  )
}
export default Header
