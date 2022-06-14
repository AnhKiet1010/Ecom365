import axios from 'axios'
import store from '@/store'
import { Modal } from 'antd'
import { getToken } from '@/utils/auth'
import { logout } from '@/store/actions'

//创建一个axios示例
const service = axios.create({
  baseURL: 'https://test1.ecom365.dev', // api 的 base_url
  timeout: 5000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getState().user.token) {
      config.headers.Authorization = getToken()
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    // eslint-disable-next-line no-undef
    Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('err' + error) // for debug
    const { status } = error.response
    if (status === 403) {
      Modal.confirm({
        title: 'Are you sure you want to log out?',
        content:
          'You have been logged out due to inactivity for a long time, you can cancel to stay on this page, or log in again',
        okText: 'Register',
        cancelText: 'Cancel',
        onOk() {
          let token = store.getState().user.token
          store.dispatch(logout(token))
        },
        onCancel() {
          console.log('Cancel')
        },
      })
    }
    // eslint-disable-next-line no-undef
    return Promise.reject(error)
  },
)

export default service
