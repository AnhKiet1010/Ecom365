import Loadable from 'react-loadable'
import Loading from '@/components/Loading'
const Home = Loadable({
  loader: () => import('@/features/Home'),
  loading: Loading,
})
const NotFound = Loadable({
  loader: () => import('@/features/NotFound'),
  loading: Loading,
})

export default [
  { path: '/', component: Home, roles: ['admin', 'editor', 'guest'] },
  { path: '/error/404', component: NotFound },
]
