import LandingPage from "./landing-page"
import React from 'react';

export default { title: "LandingPage", component: LandingPage }

export const DefaultState = () => {
  return <LandingPage groups={[]} />
}

