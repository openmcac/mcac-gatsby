import React from "react"
import { render } from '@testing-library/react'
import { CloudinaryContext } from "cloudinary-react"

const AllTheProviders = ({ children }) => {
  return (
    <CloudinaryContext cloudName="test">
      {children}
    </CloudinaryContext>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"

export { customRender as render }
