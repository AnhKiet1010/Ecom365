import { Home, Stock } from '@/icons'

const routes = [
  {
    label: 'Trang chủ',
    path: '/home',
    icon: Home,
    roles: ['admin'],
  },
  {
    label: 'Quản lí bán hàng',
    icon: Stock,
    path: '/products',
    children: [
      {
        title: 'Sản phẩm',
        path: '/products/list',
        roles: ['admin'],
      },
    ],
  },
]

export default routes
