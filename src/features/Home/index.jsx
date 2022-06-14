/* eslint-disable jsx-a11y/aria-role */
import './index.less'

import { Layout } from 'antd'
import React, { useState } from 'react'

import Header from '@/components/Header'
import Sider from '@/components/Sider'

const { Content } = Layout

const Home = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => setCollapsed(!collapsed)

  return (
    <Layout>
      <Sider collapsed={collapsed} role="all" />
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

export default Home
