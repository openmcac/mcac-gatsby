import Footer from "./footer"
import Header from "./header"
import React from "react"

const Main = ({ children }) => {
  return (
    <div className="font-sans text-base text-gray-900">
      <div className="absolute w-full">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default Main

