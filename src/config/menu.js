import { HomeIcon, StockIcon, HRMIcon, ReportIcon } from '@/icons'

const routes = [
  {
    label: 'Trang chủ',
    path: '/home',
    icon: HomeIcon,
    roles: ['admin'],
  },
  {
    label: 'Quản lí bán hàng',
    icon: StockIcon,
    path: '/product',
    hasCollapsedHeader: true,
    children: [
      {
        label: 'Sản phẩm',
        path: '/products',
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
  {
    label: 'HRM',
    icon: HRMIcon,
    path: '/hrm',
    hasCollapsedHeader: true,
    children: [
      {
        label: 'Chi nhánh',
        path: '/hrm/list',
        roles: ['admin'],
      },
      {
        label: 'Phòng ban',
        path: '/hrm/category',
        roles: ['admin'],
      },
      {
        label: 'Chức vụ',
        path: '/hrm/list-category',
        roles: ['admin'],
      },
      {
        label: 'Quản lí nhân viên',
        path: '/hrm/store',
        roles: ['admin'],
      },
    ],
  },
  {
    label: 'Báo cáo',
    path: '/reports',
    icon: ReportIcon,
    roles: ['admin'],
  },
]

export default routes
