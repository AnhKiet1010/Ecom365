import './index.less'

import React from 'react'

import LOGO from '@/assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default function Logo({ collapsed }) {
  return (
    <Link to="/home">
      <div className={`logo ${collapsed && 'center'}`}>
        <img src={LOGO} alt="logo" />
        {!collapsed && <p className="logo-text">Ecom365</p>}
      </div>
    </Link>
  )
}
