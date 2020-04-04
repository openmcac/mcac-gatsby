import React from "react"
import styled from "styled-components"

const Background = styled.div`
  background-image: url(${({ bannerUrl }) => bannerUrl});
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, .60);
  background-blend-mode: multiply;
`

const Cover = styled.div`
  background-image: url(${({ bannerUrl }) => bannerUrl});
  background-size: cover;
  background-position: center;
`

const Banner = ({ backgroundUrl, children }) => {
  return (
    <Background bannerUrl={backgroundUrl}>
      <Cover
        className="h-48 md:h-56 lg:h-64 max-w-6xl mx-auto"
        bannerUrl={backgroundUrl}
      >
        {children}
      </Cover>
    </Background>
  )
}

export default Banner

