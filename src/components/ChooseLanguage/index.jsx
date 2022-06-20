import React from 'react'
import { Dropdown, Menu, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import './index.less'
import EN_FLAG from '@/assets/images/en.png'
import VN_FLAG from '@/assets/images/vn.png'
import { DownOutlined } from '@ant-design/icons'

function ChooseLanguage() {
  const { i18n } = useTranslation()
  const langs = {
    en: { nativeName: 'English', flag: EN_FLAG },
    vi: { nativeName: 'Việt Nam', flag: VN_FLAG },
  }

  const items = Object.keys(langs).map((lang) => ({
    label: (
      <Button
        type="text"
        onClick={() => i18n.changeLanguage(lang)}
        disabled={i18n.resolvedLanguage === lang}
      >
        {langs[lang].nativeName}
      </Button>
    ),
    key: lang,
  }))

  const menu = <Menu items={items}></Menu>

  return (
    <>
      <Dropdown overlay={menu} placement="bottomRight" arrow={true}>
        <div className="wrap-choose-language">
          {/* <LangIcon style={{ fontSize: '20px', cursor: 'pointer', color: '#8d8d8d' }} /> */}
          <img src={langs[i18n.resolvedLanguage].flag} alt="flag" className="flag" />
          {langs[i18n.resolvedLanguage].nativeName}
          <DownOutlined />
        </div>
      </Dropdown>
    </>
  )
}

export default ChooseLanguage
