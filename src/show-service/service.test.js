import React from "react"
import Service from "./service"
import { render } from '@testing-library/react'

describe("Showing a service", () => {
  it("shows the service", () => {
    const service = {
      name: "Sunday Worship Service",
      serviceOrder: `- **Call to Worship**
 - **Praise & Worship**
 - **Pray with our Children**
 - **[Announcements](#announcements)**
 - **Offering**
 - **Sermon**  
   [Be Still](https://www.youtube.com/watch?v=gH4ff1O2Jfw)  
   Psalm 46:10  
   Pastor Joel Uong
 -  **Doxology**
 - **Benediction**`,
      publishedAt: "2020-03-22T13:30:00+00:00",
      announcements: [
        { description: "Announcement 1 and [link](http://example.com)" },
        { description: "Announcement 2 and [link](http://example.com)" },
        { description: "Announcement 3 and [link](http://example.com)" },
      ],
    }

    const { getByText, container, debug } = render(<Service.Contents service={service} />)

    expect(getByText("Sunday Worship Service")).toBeInTheDocument()
    expect(getByText("March 22nd 2020 at 9:30 am")).toBeInTheDocument()
    expect(getByText(/Call to Worship/i)).toBeInTheDocument()
    expect(container.querySelector(`[href="#announcements"]`)).toBeInTheDocument()

    expect(getByText(/announcement 1/i)).toBeInTheDocument()
    expect(getByText(/announcement 2/i)).toBeInTheDocument()
    expect(getByText(/announcement 3/i)).toBeInTheDocument()
    expect(container.querySelector(`[href="http://example.com"]`)).toBeInTheDocument()

  })
})
