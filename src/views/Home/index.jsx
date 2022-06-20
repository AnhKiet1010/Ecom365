import { SmileOutlined } from '@ant-design/icons'
import { Result, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import './index.less'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div className="wrap-home">
      <Result
        icon={<SmileOutlined />}
        title={<div style={{ color: '#fff' }}>{t('Home.title')}</div>}
        extra={<Button type="primary">Bắt đầu</Button>}
      />
    </div>
  )
}

export default Home
