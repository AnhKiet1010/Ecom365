import { lazy } from 'react'

const Home = lazy(() => import('@/views/Home'))
const Products = lazy(() => import('@/views/Products'))
const Reports = lazy(() => import('@/views/Reports'))
const NotFound = lazy(() => import('@/views/NotFound'))

export default [
  { path: '/home', component: Home, roles: ['admin', 'editor', 'guest'] },
  { path: '/products', component: Products, roles: ['admin', 'editor', 'guest'] },
  { path: '/reports', component: Reports, roles: ['admin', 'editor', 'guest'] },
  { path: '/error/404', component: NotFound },
]
