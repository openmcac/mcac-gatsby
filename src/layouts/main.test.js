import MainLayout from "./main"
import React from "react"
import { render } from '@testing-library/react'

describe("Main Layout", () => {
  it("renders an alert when provided", () => { const alert = <div>This is an emergency</div>
    const { container, getByText } = render(<MainLayout groups={[]} alert={alert} />)

    expect(getByText(/emergency/i)).toBeInTheDocument()
  })
})
