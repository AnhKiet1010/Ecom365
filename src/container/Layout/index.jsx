import './index.less'

import { Layout } from 'antd'
import React from 'react'

import Header from './Header'
import Sider from './Sider'

const { Content } = Layout

const MLayout = () => {
  return (
    <Layout>
      <Sider />
      <Layout className="site-layout">
        <Header />
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
