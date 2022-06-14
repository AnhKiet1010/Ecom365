import './index.less'

import { Layout } from 'antd'
import React from 'react'

import Hamburger from '../../../components/Hamburger'

const { Header: HeaderAntd } = Layout

const Header = () => {
  return (
    <HeaderAntd className="site-layout-background">
      <Hamburger />
    </HeaderAntd>
  )
}
export default Header
