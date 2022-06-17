import { SmileOutlined } from '@ant-design/icons'
import { Result, Button } from 'antd'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <Result
      icon={<SmileOutlined />}
      title={t('Home.title')}
      extra={<Button type="primary">Bắt đầu</Button>}
    />
  )
}

export default Home
