import React, { useState } from "react"
import logo from "./logo.png"
import styled from "styled-components"
import { Drawer } from "antd"
import { IoIosMenu as MenuIcon } from "react-icons/io"
import { Link } from "@reach/router"

const LogoImage = styled.img`
  filter: invert(100%);
`

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const onMenuClose = () => setMenuVisible(false)

  return (
    <div className="container mx-auto max-w-3xl h-12 flex flex-row justify-between items-center px-2">
      <Link className="border-0" to="/">
        <LogoImage src={logo} className="object-contain w-8" />
      </Link>
      <MenuIcon className="text-3xl text-white" onClick={() => setMenuVisible(true)} />
      <Drawer
        title={<span className="tracking-widest uppercase">Menu</span>}
        placement="top"
        visible={isMenuVisible}
        onClose={onMenuClose}
      >
        <ul className="text-xl">
          <li><Link to="/english-service">News</Link></li>
          <li><Link to="/sunday">Sundays</Link></li>
          <li><a href="http://giving.mcac.church">Giving</a></li>
        </ul>
      </Drawer>
    </div>
  )
}

export default Header

