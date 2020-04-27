import Footer from "./footer"
import Header from "./header"
import React from "react"
import Show from "../common/show"
import styled from "styled-components"

const ShadedContainer = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.25), 
    rgba(0, 0, 0, 0.25)
  )
`;

const Main = ({ alert, children }) => {
  return (
    <div className="font-sans text-base text-gray-900">
      <div className="-mb-12">
        <ShadedContainer className="relative">
          <Show show={alert}>
            {alert}
          </Show>
          <Header />
        </ShadedContainer>
      </div>
      {children}
      <Footer />
    </div>
  )
}

export default Main

