import './index.less'

import { Layout } from 'antd'
import { connect } from 'react-redux'

import Content from './Content'
import Header from './Header'
import Sider from './Sider'

const MLayout = () => {
  return (
    <Layout>
      <Sider />
      <Layout className="site-layout">
        <Header />
        <Content />
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.settings,
  }
}

export default connect(mapStateToProps)(MLayout)
