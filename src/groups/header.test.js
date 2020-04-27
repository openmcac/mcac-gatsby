import Header from "./header"
import React from "react"
import { render } from "../test-utils"

describe("Group Header", () => {
  it("displays the group information", () => {
    const group = {
      about: "Welcome friends and visitors. We invite you to make MCAC your spiritual home and to worship with us every Sunday morning at 9:30am. Please let us know how we can be of help to you.↵↵The 2016 Church theme is **God is Able** from Ephesians 3:20: *Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.*↵↵How can we pray for you? Let us know by [filling out a prayer request card](http://goo.gl/forms/vVNZxMsFFO).",
      bannerUrl: "https://mcac.s3.amazonaws.com/groups/887d6625-eb28-4de6-a158-d25bf5bf147f.jpg",
      meetDetails: "Sundays at 9:30am",
      name: "English Service",
      profilePictureUrl: "https://mcac.s3.amazonaws.com/groups/5c7d76a8-d195-4907-951d-5b3fb00c438d.jpg",
      shortDescription: "Worship service for the English congregation.",
      slug: "english-service",
      targetAudience: "Members and seekers",
    }

    const { getByText } = render(<Header group={group} />)

    expect(getByText(group.name)).toBeInTheDocument()
    expect(getByText(group.shortDescription)).toBeInTheDocument()
    expect(getByText(group.targetAudience)).toBeInTheDocument()
    expect(getByText(group.meetDetails)).toBeInTheDocument()
  })
})

