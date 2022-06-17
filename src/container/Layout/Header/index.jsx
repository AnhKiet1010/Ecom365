import './index.less'

import { Layout } from 'antd'
import React from 'react'

import Hamburger from '@/components/Hamburger'
import BreadCrumb from '@/components/BreadCrumb'
import ChooseLanguage from '@/components/ChooseLanguage'
import UserInfo from '@/components/UserInfo'
import Notification from '@/components/Notification'

const { Header: HeaderAntd } = Layout

const Header = () => {
  return (
    <HeaderAntd className="site-layout-background">
      <div className="left-menu">
        <Hamburger />
        <BreadCrumb />
      </div>
      <div className="right-menu">
        <Notification />
        <ChooseLanguage />
        <UserInfo />
      </div>
    </HeaderAntd>
  )
}
export default Header
