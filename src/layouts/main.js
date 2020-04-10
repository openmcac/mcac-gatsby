import Footer from "./footer"
import Header from "./header"
import React from "react"

const Main = ({ children }) => {
  return (
    <div>
      <div className="absolute w-full">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default Main

