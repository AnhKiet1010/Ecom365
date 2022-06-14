import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://test1.ecom365.dev',
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // eslint-disable-next-line no-undef
    return Promise.reject(error)
  },
)

export default axiosClient
