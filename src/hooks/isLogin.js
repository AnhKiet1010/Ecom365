import Cookies from 'js-cookie'

export function isLogin() {
  const token = Cookies.get('access_token')
  console.log({ token })
  return token ? true : false
}
