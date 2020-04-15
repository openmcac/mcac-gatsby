import LandingPage from "./landing-page"
import React from "react"
import { render } from '@testing-library/react'

describe("Landing Page", () => {
  it("shows the correct data", () => {
    const groups = [
      {
        name: "Group 1",
        profilePictureUrl: "https://picsum.photos/300/300",
      },
      {
        name: "Group 2",
        profilePictureUrl: "https://picsum.photos/300/300",
      },
      {
        name: "Group 3",
        profilePictureUrl: "https://picsum.photos/300/300",
      },
    ]

    const { container, getByAltText, getByText, debug } = render(<LandingPage.Contents groups={groups} />)

    expect(getByText(/Loved, Loving./i)).toBeInTheDocument()
    expect(getByText(/13 Finchley/i)).toBeInTheDocument()
    expect(getByText(/9:30/i)).toBeInTheDocument()
    expect(getByText(/we believe/i)).toBeInTheDocument()
    expect(getByText(/want to know more/i)).toBeInTheDocument()

    groups.forEach(group => {
      expect(getByText(group.name)).toBeInTheDocument()
      expect(container.querySelector(`[src="${group.profilePictureUrl}"]`))
        .toBeInTheDocument()
    })
  })
})
