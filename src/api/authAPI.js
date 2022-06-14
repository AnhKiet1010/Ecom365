import axiosClient from './axiosClient'

export const authAPI = {
  login(payload) {
    return axiosClient.post(
      '/webpos/control/ecomGetAuthenticationToken?USERNAME=kiet.lta&PASSWORD=Anhkiet1010',
      payload,
    )
  },
  logout() {
    return axiosClient.post('/logout')
  },
  getProfile() {
    return axiosClient.get('/profile')
  },
}
