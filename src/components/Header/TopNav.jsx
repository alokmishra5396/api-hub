import React from 'react'
import './Header.scss'
import { Menu } from './Menu'
export const TopNav = () => {
  return (
    <div className='header-wrapper'>
     <div className='top-wrapper'>
     <div className='Logo'></div>
     <Menu/>
     </div>
     
    </div>
  )
}
