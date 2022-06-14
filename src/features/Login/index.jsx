import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, message, Spin } from 'antd'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import './index.less'
import { login, getUserInfo } from '@/store/actions'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const Login = (props) => {
  const { token, login, getUserInfo } = props

  const [loading, setLoading] = useState(false)

  const handleLogin = (username, password) => {
    setLoading(true)
    login(username, password)
      .then((data) => {
        message.success('登录成功')
        handleUserInfo(data.token)
      })
      .catch((error) => {
        setLoading(false)
        message.error(error)
      })
  }

  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then(() => {})
      .catch((error) => {
        message.error(error)
      })
  }

  const onFinish = (values) => {
    console.log('Success:', values)
    const { username, password } = values
    handleLogin(username, password)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  if (token) {
    return <Redirect to="/" />
  }
  return (
    <DocumentTitle title={'Đăng Nhập'}>
      <div className="login-container">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className="content">
          <div className="title">
            <h2>Đăng Nhập</h2>
          </div>
          <Spin spinning={loading} tip="Đang tải">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '请输入用户名',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Tên tài khoản"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '请输入密码',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Đăng nhập
              </Button>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  )
}

export default connect((state) => state.user, { login, getUserInfo })(Login)
