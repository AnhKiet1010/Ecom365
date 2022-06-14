import './index.less'

import React from 'react'

import LOGO from '@/assets/images/logo.svg'

export default function Logo({ collapsed }) {
  return (
    <div className="logo">
      <img src={LOGO} alt="logo" />
      {!collapsed && <p className="logo-text">Ecom365</p>}
    </div>
  )
}
