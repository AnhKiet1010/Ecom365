const data = [
  {
    id: 'productType',
    offset: 0,
    span: 10,
    formStyles: { noStyle: true },
    options: [
      {
        name: 'Sản phẩm có cấu hình',
        value: 'config',
      },
      {
        name: 'Cấu hình của dịch vụ',
        value: 'config-services',
      },
    ],
  },
  {
    id: 'brand',
    offset: 2,
    span: 12,
    formStyles: {
      label: 'Thương hiệu',
      labelAlign: 'left',
    },
    options: [
      {
        name: 'BMW',
        value: 'bmw',
      },
      {
        name: 'Audi',
        value: 'audi',
      },
    ],
  },
]

export default data
