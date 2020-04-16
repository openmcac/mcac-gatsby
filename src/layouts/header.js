import React, { useState } from "react"
import logo from "./logo.png"
import styled from "styled-components"
import { Drawer } from "antd"
import { IoIosMenu as MenuIcon } from "react-icons/io"
import { Link as ReachLink } from "@reach/router"

const LogoImage = styled.img`
  filter: invert(100%);
`

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const onMenuClose = () => setMenuVisible(false)

  const Link = props => {
    return <ReachLink {...props} onClick={onMenuClose} />
  }

  return (
    <div className="relative container mx-auto max-w-3xl h-12 flex flex-row justify-between items-center px-2">
      <Link className="border-0" to="/">
        <LogoImage src={logo} className="object-contain w-8" />
      </Link>
      <nav className="hidden md:block text-xs tracking-wider uppercase">
        <ul>
          <li className="inline-block text-white ml-6">
            <Link to="/sunday" className="hover:text-white hover:opacity-75 border-0">
              Sundays at 9:30am
            </Link>
          </li>
          <li className="inline-block text-white ml-6">
            <Link to="/english-service" className="hover:text-white hover:opacity-75 border-0">
              News
            </Link>
          </li>
          <li className="inline-block text-white ml-6">
            <a href="http://giving.mcac.church" className="hover:text-gray-900 border border-solid px-4 py-1 hover:bg-white hover:text-gray-900">
              Giving
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden p-4 pr-0" onClick={() => setMenuVisible(true)}>
        <MenuIcon className="block text-3xl text-white" />
      </div>
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

