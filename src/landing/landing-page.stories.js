import "../tailwind.generated.css"
import LandingPage from "./landing-page"
import React from 'react';

export default { title: "LandingPage", component: LandingPage }

export const defaultState = () => {
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

export const withAnAlert = () => {
  const alert = (
    <div className="absolute w-screen py-2 lg:py-4 text-sm bg-red-800 text-white border-b border-red-900">
      <div className="container px-2 text-center mx-auto">
        In support of{" "}
        <a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/">
          Québec's COVID-19 directives
        </a>, our church building will be closed until further notice.{" "}
        Our services can be <a href="http://live.mcac.church">streamed on Sundays</a> at 9:30am!
      </div>
    </div>
  )

  return <LandingPage alert={alert} groups={[]} />
}

