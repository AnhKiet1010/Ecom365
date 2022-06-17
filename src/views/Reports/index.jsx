import { SmileOutlined } from '@ant-design/icons'
import { Result, Button } from 'antd'

const Reports = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      title="Báo cáo"
      extra={<Button type="primary">Bắt đầu</Button>}
    />
  )
}

export default Reports
