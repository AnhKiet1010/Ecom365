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
        label: 'Sản phẩm',
        path: '/products/list',
        roles: ['admin'],
      },
      {
        label: 'Danh mục',
        path: '/products/category',
        roles: ['admin'],
      },
      {
        label: 'Mục lục',
        path: '/products/list-category',
        roles: ['admin'],
      },
      {
        label: 'Cửa hàng',
        path: '/products/store',
        roles: ['admin'],
      },
      {
        label: 'Nhóm cửa hàng',
        path: '/products/group-store',
        roles: ['admin'],
      },
      {
        label: 'Chính sách giá',
        path: '/products/price',
        roles: ['admin'],
      },
      {
        label: 'Khuyến mại',
        path: '/products/promotion',
        roles: ['admin'],
      },
    ],
  },
]

export default routes
