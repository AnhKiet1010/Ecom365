import './index.less'

import { Avatar, Dropdown, Modal, Menu } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { logout, getUserInfo } from '@/store/actions'
import { Link } from 'react-router-dom'

const UserInfo = (props) => {
  const { avatar, name, token } = props
  token && getUserInfo(token)

  const handleLogout = (token) => {
    Modal.confirm({
      title: 'Đăng xuất',
      content: 'Bạn có chắc chắn muốn đăng xuất?',
      okText: 'Đồng ý',
      cancelText: 'Huỷ',
      onOk: () => {
        logout(token)
      },
    })
  }
  const onClick = ({ key }) => {
    switch (key) {
      case 'logout':
        handleLogout(token)
        break
      default:
        break
    }
  }

  const items = [
    {
      label: <Link to="/profile">Thông tin cá nhân</Link>,
      key: 'profile',
    },
    {
      label: 'Đăng xuất',
      key: 'logout',
    },
  ]

  const menu = <Menu items={items} onClick={onClick}></Menu>
  return (
    <div className="">
      <Dropdown overlay={menu} arrow={true}>
        <div className="wrap-info">
          <Avatar style={{ backgroundColor: '#7265e6' }} size="medium">
            {avatar}
          </Avatar>
          <span>{name}</span>
        </div>
      </Dropdown>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.user,
    ...state.settings,
  }
}
export default connect(mapStateToProps, { logout, getUserInfo })(UserInfo)
