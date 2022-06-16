import { SmileOutlined } from '@ant-design/icons'
import { Result, Button } from 'antd'

const Home = () => (
  <Result
    icon={<SmileOutlined />}
    title="Chào mừng bạn đến với hệ thống Ecom365"
    extra={<Button type="primary">Bắt đầu</Button>}
  />
)

export default Home
