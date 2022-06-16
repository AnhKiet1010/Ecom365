import Loading from '@/components/Loading'
import Router from '@/router'
import store from '@/store'
import { ConfigProvider } from 'antd'
import viVN from 'antd/es/locale/vi_VN'
import { Suspense } from 'react'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <ConfigProvider locale={viVN}>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <Router />
        </Suspense>
      </Provider>
    </ConfigProvider>
  )
}

export default App
