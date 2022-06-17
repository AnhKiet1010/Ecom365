import React from 'react'
import { Dropdown, Menu, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import './index.less'
import { LangIcon } from '@/icons'

function SelectLanguageField() {
  const { i18n } = useTranslation()
  const langs = {
    en: { nativeName: 'English' },
    vi: { nativeName: 'Việt Nam' },
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
      <Dropdown overlay={menu} placement="bottomRight">
        <LangIcon style={{ fontSize: '20px', cursor: 'pointer', color: '#8d8d8d' }} />
      </Dropdown>
    </>
  )
}

export default SelectLanguageField
