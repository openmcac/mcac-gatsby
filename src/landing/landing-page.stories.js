import "../tailwind.css"
import LandingPage from "./landing-page"
import React from 'react';

export default { title: "LandingPage", component: LandingPage }

export const DefaultState = () => {
  const groups = [
    {
      name: "Group 1",
      displayPicUrl: "https://picsum.photos/300/300?id=1",
    },
    {
      name: "Group 2",
      displayPicUrl: "https://picsum.photos/300/300?id=2",
    },
    {
      name: "Group 3",
      displayPicUrl: "https://picsum.photos/300/300?id=3",
    },
  ]

  return <LandingPage groups={groups} />
}

