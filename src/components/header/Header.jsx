import React from 'react'
import Navbar from '../navbar/Navbar'
import {menu} from "../../helper/data"

import '../header/Header.scss'
const Header = () => {
  return (
    <div className="header">
      <Navbar menu={menu}/>
      <h1>WHO ARE YOU?</h1>
    </div>
  )
}

export default Header
