import { lazy } from 'react'

const Home = lazy(() => import('@/features/Home'))
const Products = lazy(() => import('@/features/Products'))
const NotFound = lazy(() => import('@/features/NotFound'))

export default [
  { path: '/home', component: Home, roles: ['admin', 'editor', 'guest'] },
  { path: '/products', component: Products, roles: ['admin', 'editor', 'guest'] },
  { path: '/error/404', component: NotFound },
]
