import './index.less'

import { NotiIcon } from '@/icons'
import { Dropdown, Badge, Menu } from 'antd'

const Notification = () => {
  const items = [
    {
      label: 'List notification',
    },
  ]

  const menu = <Menu items={items} />
  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Badge size="medium" count={5}>
        <NotiIcon style={{ cursor: 'pointer', color: '#8d8d8d' }} />
      </Badge>
    </Dropdown>
  )
}
export default Notification
