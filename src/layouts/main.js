import Footer from "./footer"
import Header from "./header"
import React from "react"
import Show from "../common/show"

const Main = ({ alert, children }) => {
  return (
    <div className="font-sans text-base text-gray-900">
      <div className="-mb-12">
        <Show show={alert}>
          {alert}
        </Show>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default Main

