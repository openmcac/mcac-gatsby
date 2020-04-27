import React from "react"
import styled from "styled-components"

const DefaultBackground = styled.div`
  background-color: #e2e8f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23cbd5e0' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const Background = styled.div`
  ${({ bannerUrl }) => {
    if (bannerUrl) {
      return `
        background-image: url(http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_ID}/image/fetch/g_auto:subject,c_fill,h_384,w_750/${bannerUrl});
        background-size: cover;
        background-position: center;
        background-color: rgba(0, 0, 0, .60);
        background-blend-mode: multiply;

        @media (min-width: 1024px) {
          background-image: url(http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_ID}/image/fetch/g_auto:subject,c_fill,h_512,w_2048/${bannerUrl});
        }
      `
    }
  }}
`

const Cover = styled.div`
  background-image: url(${({ bannerUrl }) => `http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_ID}/image/fetch/g_auto:subject,c_fill,h_384,w_750/${bannerUrl}`});
  background-size: cover;
  background-position: center;

  @media (min-width: 1024px) {
    background-image: url(${({ bannerUrl }) => `http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_ID}/image/fetch/g_auto:subject,c_fill,h_512,w_2048/${bannerUrl}`});
  }
`

const Banner = ({ backgroundUrl, children }) => {
  return (
    <DefaultBackground>
      <Background bannerUrl={backgroundUrl}>
        <Cover
          className="h-48 md:h-56 lg:h-64 max-w-6xl mx-auto"
          bannerUrl={backgroundUrl}
        >
          {children}
        </Cover>
      </Background>
    </DefaultBackground>
  )
}

export default Banner

