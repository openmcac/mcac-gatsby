import Footer from "./footer"
import Header from "./header"
import React from "react"
import Show from "../common/show"

const Main = ({ alert, children }) => {
  return (
    <div className="font-sans text-base text-gray-900">
      <Show show={alert}>
        {alert}
      </Show>
      <div className="absolute w-full">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default Main

