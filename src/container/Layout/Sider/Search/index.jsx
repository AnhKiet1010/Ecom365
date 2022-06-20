import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import './index.less'
import { connect } from 'react-redux'

const Search = (props) => {
  const { sidebarCollapsed } = props
  return (
    <div className="wrap-search">
      {!sidebarCollapsed ? (
        <Input placeholder="Tìm kiếm" prefix={<SearchOutlined className="icon" />} />
      ) : (
        <div className="search-icon">
          <SearchOutlined />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.settings,
  }
}

export default connect(mapStateToProps)(Search)
