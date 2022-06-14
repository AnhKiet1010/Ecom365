import './index.less'

import { Layout } from 'antd'
import React, { useState } from 'react'

import Header from './Header'
import Sider from './Sider'

const { Content } = Layout

const MLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <Sider collapsed={collapsed} />
      <Layout className="site-layout">
        <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default MLayout
